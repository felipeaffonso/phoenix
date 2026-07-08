# Workout Templates

Workout templates define reusable training sessions in the Phoenix Web App.

## MVP Requirements

- A template has a name, training day, focus and ordered exercises.
- Each template exercise references one exercise from the exercise library.
- Templates are composed of ordered exercise groups.
- A group may contain one exercise or multiple exercises combined as a
  superset, bi-set, tri-set or circuit.
- Each prescribed series stores its own target, intensity and rest behavior.
- Initial load is optional per prescribed series.
- The workout player uses the template as the starting point for a session.

## Template Fields

| Field | Purpose |
|---|---|
| `id` | Stable internal identity. |
| `name` | Template name, such as Upper A. |
| `day_label` | Human label for intended day. |
| `focus` | Short description of the session goal. |
| `active` | Whether the template can start new sessions. |

## Training Prescription Concepts

Phoenix must model training as a prescription, not as a flat list of "3 x 10"
items.

| Concept | Meaning |
|---|---|
| Workout day | Complete training session, such as Upper A. |
| Exercise group | One isolated exercise or a combined block of exercises. |
| Prescribed series | One planned work unit inside an exercise group. |
| Series segment | A sub-part of a special series, such as a drop-set reduction. |

The Exercise Library owns the canonical movement. Workout Templates own how
that movement is prescribed.

## Exercise Grouping

| Group type | Meaning |
|---|---|
| `SINGLE` | One exercise performed alone. |
| `SUPERSET` | Combined exercises performed back-to-back. |
| `BI_SET` | Two exercises in the same block. |
| `TRI_SET` | Three exercises in the same block. |
| `CIRCUIT` | More than three exercises in the same block. |

Isolated groups execute one exercise at a time: perform the series, rest, then
repeat until that exercise is complete.

Combined groups execute by round. Example: exercise A series 1, exercise B
series 1, then group rest; exercise A series 2, exercise B series 2, then group
rest. Full rest happens after the last exercise in the group round, not between
the exercises inside the group.

The Web App should make combined exercises visually grouped during execution,
but final UI layout belongs to later planning.

## Template Exercise Fields

| Field | Purpose |
|---|---|
| `group_position` | Group order inside the template. |
| `exercise_position` | Exercise order inside the group. |
| `group_type` | Whether this is a single exercise or combined group. |
| `exercise_id` | Reference to the exercise library. |
| `execution_note` | Portuguese workout guidance shown during execution. |

## Prescribed Series Fields

| Field | Purpose |
|---|---|
| `series_order` | Series order inside the prescribed exercise. |
| `series_type` | `NORMAL`, `DROP_SET` or `REST_PAUSE`. |
| `suggested_load_kg` | Optional suggested load in kilograms. |
| `target_type` | `REPS`, `TIME_SECONDS` or `FAILURE`. |
| `target_value` | Repetition count or seconds when applicable. |
| `intensity_metric` | `NONE`, `RPE` or `RIR`. |
| `intensity_value` | Target RPE or RIR when an intensity metric is selected. |
| `rest_seconds` | Full rest after the series or group round. |

RPE accepts decimal values such as `8.5` or `9.0`. RIR accepts integer values
such as `0`, `1`, `2` or `3`.

## Special Series

| Series type | Prescription rule |
|---|---|
| `NORMAL` | Standard series followed by full rest according to the template. |
| `DROP_SET` | One main series with load-reduction segments such as 1a, 1b and 1c. Full rest happens only after the last segment. |
| `REST_PAUSE` | One main series with an ultrashort intra-series pause, usually 10 to 15 seconds, before additional reps at the same load. |

Drop-set reductions and rest-pause attempts are part of one prescribed series.
They are not separate exercises and must not trigger normal rest timing between
segments.

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

- The Web App follows the group order and series order from the template.
- The Web App shows target type, target value, suggested load and intensity
  target for each prescribed series.
- Loads start empty unless the user has prior history for that exercise.
- Single exercises rest after each completed series.
- Combined groups rest after the last exercise in the current group round.
- Drop sets do not trigger full rest between load reductions.
- Rest-pause series use an ultrashort timer that is visually distinct from a
  normal rest timer.
- Pain or instability overrides progression.
- Lumbar discomfort and shoulder pain must be easy to record during execution.

## Out Of Scope For This Document

- Authentication behavior.
- Database schema details.
- Workout history persistence.
- Progression engine calculations.
- Health, nutrition, wearable and AI features.
