# ADR 0001: Record Application Architecture

Status: Accepted

Date: 2026-07-08

## Context

Phoenix needs one documented architecture for the product repository.
`PHOENIX_CONSTITUTION.md` is the highest authority and freezes the MVP scope.

Older planning notes mentioned a Python backend stack, but the Constitution now
defines the official application architecture.

## Decision

Phoenix will be built as a modular monolith.

The official backend stack is:

- Java 25 LTS
- Spring Boot 4.x
- Spring Modulith
- Spring Data JDBC
- PostgreSQL
- Redis

The official frontend stack is:

- Next.js
- TypeScript
- PWA

The MVP scope remains limited to:

- Authentication
- User profiles
- Exercise library
- Workout templates
- Workout player
- Workout history
- Progression engine

Health, nutrition, integrations, automation and AI analysis remain product
backlog domains until separately documented.

## Consequences

- New implementation work must follow the official stack.
- Architecture changes require a new ADR.
- Documentation that references another backend stack must be updated.
- `phoenix-infra` remains infrastructure-only.
- Business logic belongs in `phoenix`, not `phoenix-infra`.
