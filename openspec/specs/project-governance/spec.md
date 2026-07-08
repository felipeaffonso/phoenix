# Project Governance Specification

## Purpose

Define the mandatory project workflow, source-of-truth hierarchy and AI agent
rules for Phoenix.

## Requirements

### Requirement: Source hierarchy
Phoenix SHALL use a documented hierarchy of authority for product and technical
decisions.

#### Scenario: Agent evaluates a requirement
- **WHEN** an agent evaluates a requirement or proposed implementation
- **THEN** it SHALL resolve authority in this order: `PHOENIX_CONSTITUTION.md`,
  ADRs, OpenSpec main specs, active OpenSpec changes, module documentation,
  code

#### Scenario: Documents conflict
- **WHEN** lower-authority documentation conflicts with higher-authority
  documentation
- **THEN** the higher-authority documentation SHALL win until a documented
  decision changes it

### Requirement: OpenSpec workflow
Phoenix changes SHALL use OpenSpec as the operational spec workflow before code
is implemented.

#### Scenario: Implementing a new capability
- **WHEN** a capability is not already covered by an OpenSpec main spec
- **THEN** the agent SHALL create or update the relevant OpenSpec spec before
  implementation

#### Scenario: Implementing a scoped change
- **WHEN** implementation changes behavior, schema, API, product scope or
  architecture
- **THEN** the agent SHALL create an OpenSpec change with proposal, design,
  tasks and delta specs before coding

#### Scenario: Completing a change
- **WHEN** an implementation change is complete
- **THEN** the corresponding OpenSpec change SHALL be archived or synced into
  main specs according to the OpenSpec workflow

### Requirement: MVP scope control
Phoenix SHALL keep MVP scope frozen unless a documented decision changes it.

#### Scenario: Feature belongs outside MVP
- **WHEN** a requested feature is outside authentication, user profiles,
  exercise library, workout templates, workout player, workout history or
  progression engine
- **THEN** the agent SHALL treat it as product backlog and stop for explicit
  product-owner direction before implementation

#### Scenario: Requirement ambiguity
- **WHEN** it is unclear whether a requirement belongs to the MVP or requires
  an ADR
- **THEN** the agent SHALL stop and ask for clarification before coding

### Requirement: Repository boundary
Phoenix SHALL keep product code separate from infrastructure code.

#### Scenario: Product logic placement
- **WHEN** business logic, domain models, API contracts or application behavior
  are implemented
- **THEN** they SHALL live in the `phoenix` repository

#### Scenario: Infrastructure placement
- **WHEN** Docker, Traefik, Cloudflare Tunnel, Portainer, monitoring, storage,
  automation services or backups are implemented
- **THEN** they SHALL live in `phoenix-infra`, not in `phoenix`

### Requirement: Definition of done
Phoenix work SHALL meet the documented Definition of Done before it is treated
as complete.

#### Scenario: Code change completion
- **WHEN** a code change is completed
- **THEN** code SHALL compile, tests SHALL pass, documentation SHALL be updated,
  unnecessary dependencies SHALL be avoided and the implementation SHALL follow
  the Constitution, ADRs and OpenSpec specs

#### Scenario: Documentation-only change completion
- **WHEN** a documentation-only change is completed
- **THEN** OpenSpec validation or relevant documentation validation SHALL pass
  when applicable
