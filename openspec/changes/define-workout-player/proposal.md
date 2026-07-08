## Why

The workout player is the core execution experience of the Phoenix Web App. It
turns a workout template into a guided session where the user records performed
sets, loads, reps and execution feedback.

## What Changes

- Define how a user starts a workout session from a template.
- Define the in-session state needed to guide exercise groups, series, rest and
  notes.
- Define isolated exercise execution: perform one set, rest, repeat until all
  prescribed sets are complete, then advance.
- Define combined group execution for supersets, bi-sets, tri-sets and
  circuits using round-based flow: exercise A set 1, exercise B set 1, then
  group rest before the next round.
- Define drop-set execution as sub-series inside one main series, without full
  rest between load reductions.
- Define rest-pause execution with an ultrashort mandatory pause inside the
  series, distinct from a normal rest interval.
- Define what data is captured during execution, including actual load, reps,
  time, completion status, RPE and RIR when applicable.
- Define how pain, instability or skipped work is recorded.
- Define how a completed session becomes workout history.

## Non-goals

- No final UI design.
- No trainer template editor behavior.
- No progression recommendation implementation.
- No wearable or cardio device integration.
- No offline-first synchronization design yet.
- No health, nutrition or AI behavior.

## Capabilities

### New Capabilities

- `workout-player`: Guided workout execution and session recording flow.

### Modified Capabilities

- None.

## Impact

- Depends on `authentication`, `user-profiles` and `authorization` for knowing
  who is training.
- Depends on `workout-templates` for the source workout structure.
- Produces data consumed by `workout-history` and later `progression-engine`.
- Will affect backend APIs, frontend player UX and data model design.
- Must make grouped exercises visually and behaviorally coherent in the Web
  App, but final screen design belongs to later planning.

## ADR

No ADR is expected for the basic player. An ADR may be required later if
offline-first synchronization or real-time behavior changes the architecture.
