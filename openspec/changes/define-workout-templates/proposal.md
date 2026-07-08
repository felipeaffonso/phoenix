## Why

Workout templates are the bridge between the exercise catalog and actual
workout execution. Phoenix needs a template model before the workout player can
start sessions consistently.

## What Changes

- Define reusable workout templates owned by users or made available by admins.
- Define workout-day templates as complete training sessions, such as Upper A
  or Lower B.
- Define ordered exercise groups referencing the Exercise Library by UUID.
- Support isolated exercise groups and combined groups for supersets, bi-sets,
  tri-sets and circuits.
- Define template-level metadata such as name, focus, intended day and active
  status.
- Define per-set prescription fields: series order, series type, suggested
  load, target type, target value, intensity metric, intensity value, rest time
  and execution note.
- Support normal sets, drop sets and rest-pause prescriptions without turning
  those methods into Exercise Library data.
- Support repetition, time-in-seconds and failure targets.
- Support optional intensity prescription using RPE or RIR.
- Define how templates relate to authorization and future workout execution.

## Non-goals

- No workout player implementation.
- No workout session history implementation.
- No progression engine calculations.
- No exercise catalog write behavior.
- No final visual design for the trainer template editor.
- No health, nutrition, wearable integration or AI behavior.

## Capabilities

### New Capabilities

- `workout-templates`: Reusable workout plans composed of ordered exercise
  groups and set prescriptions.

### Modified Capabilities

- None.

## Impact

- Depends on `exercise-library` for exercise references.
- Depends on identity/access planning for ownership and admin/user permissions.
- Will affect future backend module boundaries, PostgreSQL schema, API
  contracts and frontend template editing screens.
- Must preserve the current training program content as seed or initial
  template data.
- Must keep movement catalog data separate from prescription mechanics such as
  grouping, set type, target, intensity and rest behavior.

## ADR

No ADR is expected. This change follows the existing modular monolith and Spring
Data JDBC architecture.
