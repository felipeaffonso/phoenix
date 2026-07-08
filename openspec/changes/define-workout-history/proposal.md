## Why

Workout history is required for Phoenix to show what was actually performed and
to support progression decisions over time. Without history, the player cannot
produce durable training data.

## What Changes

- Define persisted workout sessions owned by a user.
- Define recorded exercise groups and series, including isolated and combined
  group context.
- Define recorded set results, including reps, load, elapsed time, completion
  status and skipped work.
- Preserve advanced method details for normal sets, drop sets and rest-pause
  sets, including drop-set sub-series and rest-pause attempts.
- Persist subjective effort data using RPE or RIR when captured during
  execution.
- Define how sessions relate back to templates and exercises.
- Define read APIs for reviewing past workouts.
- Define rules for preserving historical data when templates or exercises
  change later.

## Non-goals

- No progression calculation implementation.
- No template editing behavior.
- No bodyweight, health, nutrition or wearable data.
- No analytics dashboard.
- No AI analysis.
- No editing policy beyond what is explicitly planned later.

## Capabilities

### New Capabilities

- `workout-history`: Durable record of completed and partially completed
  workout sessions.

### Modified Capabilities

- None.

## Impact

- Depends on `user-profiles` for ownership.
- Depends on `exercise-library` for stable exercise references.
- Depends on `workout-player` for session creation.
- Feeds future `progression-engine` decisions.
- Will affect database schema, API contracts and frontend history views.
- Must preserve enough performed-set detail for future progression rules to
  distinguish normal work, failure targets, drop sets, rest-pause work and
  combined groups.

## ADR

No ADR is expected. This change follows the existing PostgreSQL-backed modular
monolith architecture.
