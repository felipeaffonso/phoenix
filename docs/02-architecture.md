# Architecture

Phoenix is split into two repositories.

## phoenix-infra

Infrastructure repository.

Responsible for Docker, Traefik, Cloudflare Tunnel, Portainer, monitoring, storage services, automation services and backups.

## phoenix

Product and knowledge repository.

Responsible for documentation, training system, health model, nutrition execution notes, future backend, future frontend and AI analysis.

## Current execution architecture

```text
Markdown docs -> Strong templates -> workout execution
```

## Future app architecture

```text
Web Frontend
    -> API Backend
        -> PostgreSQL + Redis
            -> Phoenix data model
```

## Planned backend stack

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Redis
- Pydantic

## Planned frontend stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- PWA-first

## Data domains

- Users
- Exercises
- Workout templates
- Workout sessions
- Exercise sets
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
