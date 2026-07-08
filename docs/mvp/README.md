# Phoenix App MVP

This directory translates the Constitution into product documentation for the
first Phoenix Web App implementation.

OpenSpec is the operational requirements workflow for implementation. Product
blueprints in this directory provide context, while implementation requirements
live in `openspec/specs/` and active changes live in `openspec/changes/`.

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

1. Authentication
2. User profiles
3. Authorization and permissions
4. Exercise Library administrative surface
5. Exercise library
6. Workout templates
7. Workout player
8. Workout history
9. Progression engine

Identity and access control come first because admin screens, exercise
management, workout templates and history all depend on knowing who the user is
and what they are allowed to do.

## OpenSpec Workflow Status

Phoenix uses the OpenSpec workflow:

```text
Proposal -> Planning -> Implementation -> Archive
```

Status by MVP feature:

| Feature | Main Spec | Proposal | Planning | Implementation | Archive |
|---|---|---|---|---|---|
| Authentication | Done: `openspec/specs/authentication/spec.md` | Done: `openspec/changes/define-identity-access-foundation/proposal.md` | Done: design, delta spec and tasks in `openspec/changes/define-identity-access-foundation/` | Not started | Not started |
| User profiles | Done: `openspec/specs/user-profiles/spec.md` | Done: `openspec/changes/define-identity-access-foundation/proposal.md` | Done: design, delta spec and tasks in `openspec/changes/define-identity-access-foundation/` | Not started | Not started |
| Authorization and permissions | Done: `openspec/specs/authorization/spec.md` | Done: `openspec/changes/define-identity-access-foundation/proposal.md` | Done: design, delta spec and tasks in `openspec/changes/define-identity-access-foundation/` | Not started | Not started |
| Exercise Library admin surface | Done: `openspec/specs/admin-exercise-management/spec.md` | Done: `openspec/changes/define-identity-access-foundation/proposal.md` | Done: design, delta spec and tasks in `openspec/changes/define-identity-access-foundation/` | Not started | Not started |
| Exercise library | Done: `openspec/specs/exercise-library/spec.md` | Done: `openspec/changes/implement-exercise-library/proposal.md` | Done, blocked by identity/access planning | Not started | Not started |
| Workout templates | Not started | Done: `openspec/changes/define-workout-templates/proposal.md` | Not started | Not started | Not started |
| Workout player | Not started | Done: `openspec/changes/define-workout-player/proposal.md` | Not started | Not started | Not started |
| Workout history | Not started | Done: `openspec/changes/define-workout-history/proposal.md` | Not started | Not started | Not started |
| Progression engine | Not started | Done: `openspec/changes/define-progression-engine/proposal.md` | Not started | Not started | Not started |

Do not implement a feature until its Proposal and Planning artifacts are
complete and valid.

## Implementation Readiness

Before coding an MVP module, its documentation must define:

- module boundary and package name
- domain model
- database table names, columns, indexes and constraints
- validation rules
- API contract
- seed data rules, when applicable
- explicit non-goals

Current readiness:

| Module | Status | Source |
|---|---|---|
| Authentication | Planning complete; implementation not started | `openspec/specs/authentication/spec.md` and `openspec/changes/define-identity-access-foundation/` |
| User profiles | Planning complete; implementation not started | `openspec/specs/user-profiles/spec.md` and `openspec/changes/define-identity-access-foundation/` |
| Authorization and permissions | Planning complete; implementation not started | `openspec/specs/authorization/spec.md` and `openspec/changes/define-identity-access-foundation/` |
| Exercise Library admin surface | Planning complete; implementation not started | `openspec/specs/admin-exercise-management/spec.md` and `openspec/changes/define-identity-access-foundation/` |
| Exercise library | Planned, but should wait for identity/access foundation | `EXERCISE_LIBRARY.md` and `openspec/specs/exercise-library/spec.md` |
| Workout templates | Proposal complete; planning not started | `WORKOUT_TEMPLATES.md` and `openspec/changes/define-workout-templates/` |
| Workout player | Proposal complete; planning not started | `openspec/changes/define-workout-player/` |
| Workout history | Proposal complete; planning not started | `openspec/changes/define-workout-history/` |
| Progression engine | Proposal complete; planning not started | `docs/training/PROGRESSION.md` and `openspec/changes/define-progression-engine/` |

## Non-goals

The following are outside the MVP:

- Health tracking
- Nutrition tracking
- Wearable integrations
- Automation workflows
- AI analysis
- External workout app sync
- Professional trainer portal
- Student management by personal trainers or training professionals

## Product Backlog Proposals

The following OpenSpec proposals document future direction but are not part of
the frozen MVP:

| Capability | Proposal | Status |
|---|---|---|
| Professional portal | `openspec/changes/define-professional-portal/proposal.md` | Proposal complete; planning not started |

## Source documents

- `PHOENIX_CONSTITUTION.md`
- `docs/adr/0001-record-application-architecture.md`
- `docs/training/README.md`
- `docs/training/PROGRAM.md`
- `docs/training/PROGRESSION.md`
- `docs/training/TEMPLATE-*.md`
