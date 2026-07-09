# ADR 0003: Use Separate Frontend and Backend Runtimes

Status: Accepted

Date: 2026-07-09

## Context

Phoenix is a modular monolith backend with a Next.js TypeScript frontend in the
same product repository. The frontend was created under `src/frontend` and
runs as a Next.js application. The backend is a Spring Boot application that
already exposes API routes under `/api`.

Local development and Replit previews need a simple way to run the frontend and
backend before CI/CD exists. The existing `phoenix-infra` repository already
owns Traefik, Cloudflared, PostgreSQL and Redis. Phoenix must consume those
services without moving infrastructure ownership or business logic between
repositories.

## Decision

Phoenix will run the frontend and backend as separate application processes.

For local development:

- Next.js frontend runs on port `5000`.
- Spring Boot backend runs on port `8080`.
- Browser-facing API calls use `/api/...`.
- The frontend development server rewrites `/api/...` to a configurable backend
  origin, defaulting to `http://localhost:8080`.

For deployment packaging, Phoenix will use two product-owned container images:

- one backend image for the Spring Boot runtime
- one frontend image for the Next.js runtime

For the intended MVP deployment shape:

- `phoenix.affonsera.dev/*` serves the Next.js frontend.
- `phoenix.affonsera.dev/api/*` routes to the Spring Boot backend.
- Traefik, Cloudflared, Docker networks, host volumes and deployment routing
  remain owned by `phoenix-infra`.

The product repository may document runtime contracts and include application
configuration, but production infrastructure files and secrets remain outside
`phoenix`.

## Consequences

- Frontend and backend can be developed, restarted and deployed independently.
- Local development requires two running processes unless a wrapper command is
  added later.
- Same-origin `/api` routing keeps browser integration simpler for the MVP and
  avoids introducing CORS as a product concern prematurely.
- CI/CD can build and publish versioned frontend and backend images.
- A future `phoenix-infra` change will be needed to deploy those images and
  publish the app through Traefik/Cloudflared.
- A future CI/CD decision can choose how to build and deploy the two runtimes
  without revisiting the product-level routing contract.
