## Context

Phoenix now contains a Spring Boot backend and a Next.js frontend in the same
repository. The frontend currently runs with `npm run dev` on port `5000`, and
the backend uses the Spring Boot default port `8080`. `phoenix-infra` already
provides Traefik, Cloudflared, PostgreSQL and Redis, with exposed applications
joining the external `proxy` network and storage services joining the external
`internal` network.

The product repository must own product runtime contracts and code. The
infrastructure repository must continue to own infrastructure services,
deployment routing files, host storage and tunnel configuration.

## Goals / Non-Goals

**Goals:**

- Establish the frontend/backend process boundary for local development.
- Establish the API path contract that the frontend will use.
- Establish the future deployment routing shape for `phoenix.affonsera.dev`.
- Establish separate frontend and backend Docker images as the deployment
  packaging target.
- Keep local Replit development compatible with the current frontend workflow.
- Document the decision in an ADR before runtime configuration grows.

**Non-Goals:**

- Implement CI/CD.
- Add production Docker Compose files or Traefik labels to `phoenix-infra`.
- Implement authentication/session/cookie behavior.
- Change the MVP feature scope.
- Introduce a new runtime or reverse proxy dependency in `phoenix`.

## Decisions

1. Run frontend and backend as separate processes.

   The Next.js frontend SHALL run separately from the Spring Boot backend.
   Locally, the frontend uses port `5000` and the backend uses port `8080`.

   Alternative considered: serve the Next.js build from Spring Boot. This would
   reduce process count, but it would fight the selected Next.js runtime,
   Replit workflow and future PWA/frontend deployment needs.

2. Use `/api` as the browser-facing API path.

   Backend controllers already expose `/api/...`. The frontend SHALL call
   relative `/api` URLs where practical. In local development, Next.js SHALL
   rewrite `/api/:path*` to the backend origin configured by environment, with
   `http://localhost:8080` as the default.

   Alternative considered: expose the backend as `api.phoenix.affonsera.dev`.
   That remains possible later, but a same-origin `/api` path keeps CORS and
   browser security simpler for the MVP.

3. Package deployable runtimes as separate container images.

   The product repository SHALL own Docker build definitions for a backend
   image and a frontend image. The backend image runs the Spring Boot
   application. The frontend image runs the Next.js application. CI/CD will
   later build and publish versioned images from those definitions.

   Alternative considered: one combined image with frontend and backend. This
   would reduce the number of deployed units, but it would couple unrelated
   runtimes, complicate scaling/restarts and work against the existing
   frontend/backend boundary.

4. Publish the frontend on `phoenix.affonsera.dev` first.

   The intended production shape is:

   - `phoenix.affonsera.dev/*` routes to the Next.js frontend.
   - `phoenix.affonsera.dev/api/*` routes to the Spring Boot backend.

   Traefik and Cloudflared remain in `phoenix-infra`. Product code may document
   the expected routing contract, but infrastructure labels and tunnel details
   are implemented separately in `phoenix-infra` when deployment work begins.

5. Keep infrastructure service consumption explicit.

   Backend local profile configuration may read `../phoenix-infra/.env` for
   local PostgreSQL and Redis settings, but must not commit secrets. Production
   deployment shall pass secrets through the runtime environment.

## Risks / Trade-offs

- Local rewrite hides cross-origin issues that may appear if the backend is
  later exposed on a separate subdomain. → Keep `/api` same-origin as the
  primary MVP routing contract.
- Replit and local development may require different frontend hosts. → Keep
  the backend origin configurable through `NEXT_PUBLIC_API_BASE_URL` or an
  equivalent environment variable.
- Production routing is not implemented in this change. → Document the
  contract now, add product Docker build definitions, and create a later infra
  change when CI/CD/deployment begins.
- Backend and frontend can drift if their API contract is implicit. → Keep
  frontend adapters behind stable functions and align them with OpenSpec/API
  docs before replacing mocks.
