## 1. Decision Records

- [x] 1.1 Add an ADR for separate frontend/backend runtimes and same-origin
      `/api` routing.
- [x] 1.2 Add OpenSpec delta requirements for runtime topology.
- [x] 1.3 Validate the OpenSpec change.

## 2. Local Runtime Configuration

- [x] 2.1 Configure the Next.js development server to rewrite `/api/:path*`
      to a configurable backend origin.
- [x] 2.2 Keep the frontend development port documented as `5000`.
- [x] 2.3 Keep the backend development port documented as `8080`.
- [x] 2.4 Document the local commands required to run backend and frontend
      together.

## 3. Deployment Topology Documentation

- [x] 3.1 Document the intended `phoenix.affonsera.dev` routing contract.
- [x] 3.2 Document which future routing changes belong in `phoenix-infra`.
- [x] 3.3 Document that CI/CD and production Compose changes are deferred.

## 4. Validation

- [x] 4.1 Run `openspec validate define-app-runtime-topology`.
- [x] 4.2 Run `openspec validate --specs`.
- [x] 4.3 Run backend tests with `./mvnw test`.
- [x] 4.4 Run frontend validation when dependencies are available.


## 5. Container Packaging

- [x] 5.1 Add product-owned backend Docker build definition.
- [x] 5.2 Add product-owned frontend Docker build definition.
- [x] 5.3 Document local image build commands.
- [x] 5.4 Validate backend image build.
- [x] 5.5 Validate frontend image build.
