# Application Architecture Specification

## Purpose

Define the official Phoenix application architecture and technology constraints.

## Requirements

### Requirement: Web App as product center
Phoenix SHALL use the Phoenix Web App as the primary product experience and
workout execution client.

#### Scenario: Workflow ownership
- **WHEN** workout execution behavior is designed
- **THEN** the Phoenix Web App SHALL be treated as the center of the workflow

#### Scenario: External tools
- **WHEN** external tools inspire workflows or data models
- **THEN** they SHALL remain outside the core execution loop unless explicitly
  documented in an OpenSpec change and accepted by the product owner

### Requirement: Modular monolith backend
Phoenix SHALL be built as a modular monolith backend.

#### Scenario: Backend implementation
- **WHEN** backend code is added
- **THEN** it SHALL use Java 25 LTS, Spring Boot 4.x, Spring Modulith and
  Spring Data JDBC

#### Scenario: Module ownership
- **WHEN** a backend capability is implemented
- **THEN** it SHALL be placed in a module package with a clear boundary and
  documented ownership

### Requirement: Persistence stack
Phoenix SHALL use PostgreSQL as the primary relational database.

#### Scenario: Domain persistence
- **WHEN** domain data is persisted
- **THEN** it SHALL use PostgreSQL and repository code in the `phoenix`
  product repository

#### Scenario: Redis usage
- **WHEN** Redis is introduced
- **THEN** it SHALL be for a documented application use case and not merely
  because it appears in the target stack

### Requirement: Frontend stack
Phoenix SHALL use a Next.js TypeScript PWA frontend.

#### Scenario: Frontend implementation
- **WHEN** frontend code is added
- **THEN** it SHALL use Next.js, TypeScript and PWA-first design

### Requirement: Architecture changes
Phoenix SHALL require an ADR for architecture changes.

#### Scenario: Official technology replacement
- **WHEN** a change would replace Java 25, Spring Boot 4.x, Spring Modulith,
  Spring Data JDBC, PostgreSQL, Redis, Next.js or PWA-first architecture
- **THEN** an ADR SHALL be created and accepted before implementation

#### Scenario: New architectural dependency
- **WHEN** a new framework, runtime, persistence technology or integration
  pattern is introduced
- **THEN** the agent SHALL determine whether an ADR is required before coding

### Requirement: Product and infrastructure separation
Phoenix SHALL keep infrastructure concerns out of product business logic.

#### Scenario: Infrastructure repository
- **WHEN** infrastructure services, deployment routing, storage operations,
  monitoring or backups are changed
- **THEN** those changes SHALL be made in `phoenix-infra`

#### Scenario: Product repository
- **WHEN** product behavior, domain model, API, UI or AI analysis behavior is
  changed
- **THEN** those changes SHALL be made in `phoenix`
