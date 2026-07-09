## ADDED Requirements

### Requirement: Separate frontend and backend runtime processes
Phoenix SHALL run the Next.js frontend and Spring Boot backend as separate
application processes.

#### Scenario: Local frontend runtime
- **WHEN** the Phoenix frontend is started for local development
- **THEN** it SHALL listen on port `5000`

#### Scenario: Local backend runtime
- **WHEN** the Phoenix backend is started for local development
- **THEN** it SHALL listen on port `8080`

### Requirement: Browser-facing API path
Phoenix SHALL expose backend HTTP APIs to the frontend under the browser-facing
`/api` path.

#### Scenario: Frontend calls backend API locally
- **WHEN** the local frontend calls a backend API
- **THEN** it SHALL use a `/api/...` URL that is proxied or rewritten to the
  local backend origin

#### Scenario: Backend controller path
- **WHEN** backend controllers expose MVP APIs
- **THEN** those APIs SHALL remain under `/api/...`

### Requirement: Configurable local backend origin
Phoenix SHALL allow the frontend development runtime to configure the backend
origin without code changes.

#### Scenario: Default local backend origin
- **WHEN** no frontend API origin environment variable is provided
- **THEN** the frontend development proxy SHALL target `http://localhost:8080`

#### Scenario: Custom local backend origin
- **WHEN** a frontend API origin environment variable is provided
- **THEN** the frontend development proxy SHALL target that configured origin

### Requirement: Containerized deployment packaging
Phoenix SHALL package frontend and backend deployment runtimes as separate
container images.

#### Scenario: Backend deployment image
- **WHEN** the backend deployment image is built
- **THEN** it SHALL contain the Spring Boot backend runtime without the Next.js
  frontend runtime

#### Scenario: Frontend deployment image
- **WHEN** the frontend deployment image is built
- **THEN** it SHALL contain the Next.js frontend runtime without the Spring Boot
  backend runtime

#### Scenario: Future CI/CD image publishing
- **WHEN** CI/CD is implemented
- **THEN** it SHALL build and publish versioned frontend and backend images
  from the product repository

### Requirement: Future same-origin production routing
Phoenix SHALL target same-origin production routing for the MVP web app.

#### Scenario: Frontend production host
- **WHEN** Phoenix is deployed for browser access
- **THEN** `phoenix.affonsera.dev` SHALL serve the Phoenix frontend

#### Scenario: Backend production API path
- **WHEN** Phoenix is deployed for browser access
- **THEN** `phoenix.affonsera.dev/api/...` SHALL route to the Phoenix backend

### Requirement: Infrastructure separation
Phoenix SHALL document product runtime expectations in the product repository
without moving infrastructure ownership out of `phoenix-infra`.

#### Scenario: Product repository runtime contract
- **WHEN** frontend/backend runtime behavior is changed
- **THEN** the product repository SHALL document the application-level contract

#### Scenario: Infrastructure repository routing implementation
- **WHEN** Traefik, Cloudflared, host networks, volumes or deployment routing
  are changed
- **THEN** those changes SHALL be made in `phoenix-infra`
