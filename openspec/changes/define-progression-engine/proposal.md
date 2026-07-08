## Why

The progression engine turns workout history into actionable training guidance.
It is required for Phoenix to help users increase, maintain or reduce training
load according to documented progression rules.

## What Changes

- Define progression inputs from workout history.
- Define double-progression rules based on target rep ranges, performed reps,
  load and completion quality.
- Define how RPE and RIR affect maintain, increase or reduce recommendations.
- Define how failure targets are interpreted without treating every failure as
  an automatic regression signal.
- Define how drop sets and rest-pause sets are interpreted as advanced methods,
  not as ordinary straight sets.
- Define load increase, maintain and reduce recommendations.
- Define safety overrides for lumbar discomfort, shoulder pain, instability and
  technique breakdown.
- Define how recommendations are surfaced without replacing user judgment.

## Non-goals

- No AI coach.
- No nutrition, medication, sleep or wearable-based recommendations.
- No automatic template mutation without user confirmation.
- No advanced periodization model beyond documented rule-based progression.
- No medical advice.

## Capabilities

### New Capabilities

- `progression-engine`: Rule-based training progression recommendations based
  on workout history and documented safety constraints.

### Modified Capabilities

- None.

## Impact

- Depends on `workout-history` for completed set data.
- Depends on `workout-templates` for target rep ranges, target type, intensity
  prescription, set method and exercise prescription context.
- Uses documented training progression rules from `docs/training/PROGRESSION.md`.
- Will affect backend domain services, tests and frontend recommendation
  displays.

## ADR

No ADR is expected for a deterministic rule-based engine. An ADR may be
required later if AI-driven recommendations become part of this capability.
