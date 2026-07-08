# Phoenix App MVP

This directory translates the Constitution into product documentation for the
first Phoenix Web App implementation.

## Scope

The MVP includes only:

- Authentication
- User profiles
- Exercise library
- Workout templates
- Workout player
- Workout history
- Progression engine

## Current implementation order

1. Exercise library
2. Workout templates
3. Workout player
4. Workout history
5. Progression engine
6. Authentication and user profiles

Exercise library and workout templates come first because the training docs
already define the most mature product data.

## Non-goals

The following are outside the MVP:

- Health tracking
- Nutrition tracking
- Wearable integrations
- Automation workflows
- AI analysis
- External workout app sync

## Source documents

- `PHOENIX_CONSTITUTION.md`
- `docs/adr/0001-record-application-architecture.md`
- `docs/training/README.md`
- `docs/training/PROGRAM.md`
- `docs/training/PROGRESSION.md`
- `docs/training/TEMPLATE-*.md`
