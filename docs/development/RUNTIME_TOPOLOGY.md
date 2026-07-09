# Phoenix Runtime Topology

Phoenix runs as two application processes in local development and in the intended MVP deployment shape.

## Local Development

Run the backend and frontend in separate terminals:

```bash
npm run backend:dev
npm run frontend:dev
```

Default local ports:

| Runtime | Command | Port |
|---|---|---|
| Spring Boot backend | `npm run backend:dev` | `8080` |
| Next.js frontend | `npm run frontend:dev` | `5000` |

The frontend calls backend APIs through `/api/...`. During local development,
Next.js rewrites `/api/:path*` to the backend origin configured by
`PHOENIX_API_ORIGIN`. If the variable is not set, the frontend targets
`http://localhost:8080`.

Example custom backend origin:

```bash
PHOENIX_API_ORIGIN=http://127.0.0.1:8080 npm run frontend:dev
```

The backend local profile can reuse `../phoenix-infra/.env` for PostgreSQL
settings, but secrets stay outside this repository.

## Containerized Deployment Target

The deployable product shape is two container images:

| Image | Runtime |
|---|---|
| Phoenix backend image | Spring Boot backend |
| Phoenix frontend image | Next.js frontend |

CI/CD is expected to build and publish versioned images later. Runtime
orchestration, Traefik labels and Cloudflare tunnel configuration remain in
`phoenix-infra`.

Local image build commands:

```bash
npm run docker:build:backend
npm run docker:build:frontend
```

## Intended Deployment Routing

The MVP target is same-origin browser access:

| Public route | Runtime |
|---|---|
| `https://phoenix.affonsera.dev/*` | Next.js frontend |
| `https://phoenix.affonsera.dev/api/*` | Spring Boot backend |

`phoenix-infra` remains responsible for Traefik, Cloudflared, Docker networks,
volumes, host ports and deployment routing. The product repository documents
the application contract and owns product code only.

## Deferred Work

CI/CD, production Docker Compose files, Traefik labels and Cloudflare tunnel
configuration are intentionally deferred until deployment work begins.
