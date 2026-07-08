# Architecture

This document follows `PHOENIX_CONSTITUTION.md`, which is the highest
authority for architecture decisions in this repository.

Relevant ADRs:

- [`docs/adr/0001-record-application-architecture.md`](adr/0001-record-application-architecture.md)

Phoenix is split into two repositories.

## phoenix-infra

Infrastructure repository.

Responsible for Docker, Traefik, Cloudflare Tunnel, Portainer, monitoring, storage services, automation services and backups.

## phoenix

Product and knowledge repository.

Responsible for documentation, training system, future backend and future
frontend.

Health, nutrition, AI analysis and external integrations are product backlog
domains unless a documented decision moves them into active scope.

## Current execution architecture

```text
Markdown docs -> Phoenix Web App specifications -> workout execution
```

## Target app architecture

```text
Web Frontend
    -> API Backend
        -> PostgreSQL + Redis
            -> Phoenix data model
```

## Official backend stack

- Java 25 LTS
- Spring Boot 4.x
- Spring Modulith
- Spring Data JDBC
- PostgreSQL
- Redis

## Official frontend stack

- Next.js
- TypeScript
- PWA-first

## MVP domains

The MVP scope is frozen by the Constitution and includes only:

- Authentication
- User profiles
- Exercise library
- Workout templates
- Workout player
- Workout history
- Progression engine

MVP product details are documented in [`docs/mvp/`](mvp/).

## Product backlog domains

The following domains belong to the broader Phoenix vision and must not enter
the MVP unless a documented decision changes the scope:

- Cardio sessions
- Body weight
- Measurements
- Bioimpedance
- Medication
- Supplements
- Nutrition plans
- Meals
- Photos
- Lab exams
- Goals
- Weekly check-ins
- AI analysis
- External integrations
