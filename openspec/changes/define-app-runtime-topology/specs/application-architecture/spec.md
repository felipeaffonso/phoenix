## ADDED Requirements

### Requirement: Application runtime topology
Phoenix SHALL define a documented runtime topology for the Next.js frontend,
Spring Boot backend and future reverse proxy routing.

#### Scenario: Runtime topology decision
- **WHEN** frontend/backend process boundaries or browser-facing routing are
  changed
- **THEN** the decision SHALL be documented in an accepted ADR and OpenSpec
  change before implementation

#### Scenario: Runtime topology implementation
- **WHEN** runtime configuration is added to the product repository
- **THEN** it SHALL follow the documented frontend/backend topology without
  moving infrastructure concerns into `phoenix`
