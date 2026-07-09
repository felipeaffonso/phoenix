## Why

Phoenix now has both a Spring Boot backend and a Next.js frontend in the same
product repository. We need one documented runtime topology so local
development, Replit previews and future Traefik/Cloudflared deployment all use
the same frontend/backend boundary.

## What Changes

- Define how the Phoenix Web App frontend and Phoenix API backend run as
  separate application processes.
- Define local development ports and the API base path used by the frontend.
- Define the intended production routing shape for `phoenix.affonsera.dev`
  using separate frontend and backend container images, without implementing
  CI/CD in this change.
- Document how `phoenix` uses `phoenix-infra` services while keeping product
  logic and deployment details separated.
- Add an ADR because this is an application runtime and routing decision.

Non-goals:

- No CI/CD pipeline implementation.
- No production Traefik labels or Docker Compose changes in `phoenix-infra`.
- No authentication, authorization or session strategy changes.
- No new backend capability beyond exposing the existing API consistently.

## Capabilities

### New Capabilities

- `app-runtime-topology`: Defines the runtime relationship between the Next.js
  frontend, Spring Boot backend, local ports, API path and future reverse proxy
  routing.

### Modified Capabilities

- `application-architecture`: Adds explicit runtime topology requirements for
  frontend/backend process boundaries and deployment routing.

## Impact

- Documentation: new ADR and runtime guide for local/deployment topology.
- Packaging: product-owned Dockerfiles may be added for frontend and backend
  images; deployment orchestration remains in `phoenix-infra`.
- OpenSpec: new topology capability and application architecture delta.
- Frontend: align README and configuration with the selected local API path and
  existing port.
- Backend: align local configuration with the selected backend port and API
  path.
- Infrastructure: no direct change; the design references existing
  `phoenix-infra` networks and services as deployment context only.
