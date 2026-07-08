# Workout Templates

Workout templates define reusable training sessions in the Phoenix Web App.

## MVP Requirements

- A template has a name, training day, focus and ordered exercises.
- Each template exercise references one exercise from the exercise library.
- Each template exercise stores sets, minimum template reps, target rep range,
  rest time and execution note.
- Initial load is optional.
- The workout player uses the template as the starting point for a session.

## Template Fields

| Field | Purpose |
|---|---|
| `id` | Stable internal identity. |
| `name` | Template name, such as Upper A. |
| `day_label` | Human label for intended day. |
| `focus` | Short description of the session goal. |
| `active` | Whether the template can start new sessions. |

## Template Exercise Fields

| Field | Purpose |
|---|---|
| `position` | Exercise order inside the template. |
| `exercise_id` | Reference to the exercise library. |
| `sets` | Planned working sets. |
| `template_reps` | Minimum reps shown as the default target. |
| `target_reps` | Real progression range, such as `8-12`. |
| `rest_seconds` | Default rest between sets. |
| `execution_note` | Portuguese workout guidance shown during execution. |

## Current Templates

| Template | Day | Focus | Source |
|---|---|---|---|
| Cardio | Monday | Fasted Zone 2 | `docs/training/PROGRAM.md` |
| Upper A | Tuesday | Chest, back, lateral delts and triceps | `docs/training/TEMPLATE-01-UPPER-A.md` |
| Lower A | Wednesday | Lower body with lumbar-safe selection | `docs/training/TEMPLATE-02-LOWER-A.md` |
| Recovery + Cardio | Thursday | Zone 2 and light mobility | `docs/training/TEMPLATE-03-RECOVERY.md` |
| Upper B | Friday | Back, chest, rear delts and biceps | `docs/training/TEMPLATE-04-UPPER-B.md` |
| Lower B | Saturday | Lower body with supported patterns | `docs/training/TEMPLATE-05-LOWER-B.md` |
| Shoulders + Arms | Sunday | Shoulder-safe delts, biceps and triceps | `docs/training/TEMPLATE-06-SHOULDERS-ARMS.md` |

## Execution Rules

- The Web App shows `template_reps` as the default target.
- The Web App shows `target_reps` and progression guidance in the execution
  note.
- Loads start empty unless the user has prior history for that exercise.
- Pain or instability overrides progression.
- Lumbar discomfort and shoulder pain must be easy to record during execution.

## Out Of Scope For This Document

- Authentication behavior.
- Database schema details.
- Workout history persistence.
- Progression engine calculations.
- Health, nutrition, wearable and AI features.
