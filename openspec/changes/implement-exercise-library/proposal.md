## Why

The Exercise Library is the first MVP domain module needed by workout templates,
workout execution and workout history. It turns the documented exercise catalog
into a stable backend capability that other MVP modules can reference by UUID.

This change is planned but should not be applied until the identity, user
profile, authorization and admin exercise management foundation is planned.

## What Changes

- Add the initial backend implementation for the existing `exercise-library`
  capability.
- Persist canonical exercises in PostgreSQL using Spring Data JDBC.
- Seed the documented initial exercise catalog idempotently.
- Expose a read-only API for listing exercises and retrieving an exercise by
  UUID.
- Keep workout-template-specific sets, reps, rest, execution notes and
  progression behavior outside this module.

## Non-goals

- No workout template implementation.
- No workout player implementation.
- No workout history implementation.
- No progression engine implementation.
- No exercise create/update/delete API in the first implementation.
- No health, nutrition, wearable integration or AI behavior.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `exercise-library`: Implement the existing exercise library requirements in
  backend code, database schema, seed data and read-only API.

## Impact

- Adds backend package `dev.affonsera.phoenix.exercise`.
- Adds PostgreSQL table `exercises`.
- Adds Spring Data JDBC repository code for exercises.
- Adds read-only HTTP endpoints under `/api/exercises`.
- Adds tests for domain validation, repository behavior and API responses.
- Adds no new external dependencies.

## Dependency

Before implementation, complete the Proposal and Planning phases for
`define-identity-access-foundation`. Exercise administration depends on knowing
which users and roles can create, edit or deactivate exercises.

## ADR

No ADR is required. The change follows the accepted application architecture in
`docs/adr/0001-record-application-architecture.md` and the existing
`application-architecture` OpenSpec.
