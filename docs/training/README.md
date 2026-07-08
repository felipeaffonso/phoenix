# Training

This directory is the source of truth for the current Phoenix training program
content. Implementation requirements are governed by the Constitution, ADRs and
OpenSpec specs.

The immediate goal is practical: define Phoenix Web App workout templates and
train consistently.

## Current weekly structure

| Day | Plan |
|---|---|
| Monday | Fasted cardio only |
| Tuesday | Upper A |
| Wednesday | Lower A |
| Thursday | Recovery + cardio |
| Friday | Upper B |
| Saturday | Lower B |
| Sunday | Shoulders + Arms |

## Constraints

- Avoid heavy axial loading.
- Avoid movements with aggressive twisting near the hip/lumbar area.
- Avoid heavy squat, heavy deadlift and very heavy leg press for now.
- Shoulder history: right rotator cuff surgery.
- Prefer machine/cable-supported exercises.
- Prioritize consistency, technique and progression over ego lifting.

## Phoenix template rule

In Phoenix workout templates:

- Set the minimum rep number in the template.
- Put the target rep range in the execution note.
- Leave initial weights empty or conservative.
- Use the execution note as guidance during the workout.

Example:

```text
Template reps: 10
Execution note: Meta 10-15 reps
```

## Files

- `PROGRAM.md` — full weekly program
- `PROGRESSION.md` — how to increase loads
- `TEMPLATE-01-UPPER-A.md`
- `TEMPLATE-02-LOWER-A.md`
- `TEMPLATE-03-RECOVERY.md`
- `TEMPLATE-04-UPPER-B.md`
- `TEMPLATE-05-LOWER-B.md`
- `TEMPLATE-06-SHOULDERS-ARMS.md`
