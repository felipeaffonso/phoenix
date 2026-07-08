# Exercise Library

The exercise library is the canonical catalog of movements available to
workout templates.

## MVP Requirements

- Store one canonical exercise record per movement.
- Support English and Portuguese display names.
- Classify movement pattern and body area.
- Capture equipment type.
- Capture safety notes relevant to lumbar spine and shoulder constraints.
- Allow workout templates to reference exercises by stable identity, not by
  copied text.

## Exercise Fields

| Field | Purpose |
|---|---|
| `id` | Stable internal identity. |
| `name` | Canonical English exercise name. |
| `name_pt` | Portuguese display name. |
| `pattern` | Movement pattern, such as horizontal push or knee extension. |
| `body_area` | Primary trained area. |
| `equipment` | Machine, cable, dumbbell, bodyweight or cardio. |
| `default_safety_notes` | Execution constraints reused by templates. |
| `active` | Whether the exercise can be selected in new templates. |

## Initial Catalog

| Exercise | Portuguese | Pattern / Area | Equipment | Notes |
|---|---|---|---|---|
| Chest Press (Machine) | Supino na maquina / Chest press | Horizontal push / chest | Machine | Back supported, scapulae set, shoulder stays on bench. |
| Seated Row (Cable) | Remada sentada no cabo | Horizontal pull / back | Cable | Stable torso, no lumbar swing. |
| Incline Chest Press (Machine) | Supino inclinado na maquina | Incline push / upper chest | Machine | Comfortable range, no right-shoulder pain. |
| Lat Pulldown (Cable) | Puxada alta aberta | Vertical pull / lats | Cable | Pull to upper chest, no body swinging. |
| Lateral Raise (Machine) | Elevacao lateral maquina | Shoulder abduction / lateral delts | Machine | Controlled reps, no momentum. |
| Triceps Pushdown (Cable - Straight Bar) | Triceps polia barra reta | Elbow extension / triceps | Cable | Fixed elbows, avoid torso cheating. |
| Leg Extension (Machine) | Cadeira extensora | Knee extension / quads | Machine | Controlled descent, no bouncing. |
| Seated Leg Curl | Mesa flexora sentada | Knee flexion / hamstrings | Machine | Do not lift hips, controlled return. |
| Hip Thrust (Machine or Smith) | Elevacao pelvica / Hip Thrust | Hip extension / glutes | Machine or Smith | Neutral spine, no lumbar hyperextension. |
| Bulgarian Split Squat | Afundo bulgaro | Unilateral squat / quads and glutes | Bodyweight or dumbbell | Prioritize stability, no hip pain. |
| Standing Calf Raise | Panturrilha em pe | Calves | Machine or bodyweight | Full range, controlled top hold. |
| Cable Crunch | Abdominal no cabo | Trunk flexion / abs | Cable | Flex spine, do not pull with arms. |
| Iso-Lateral Row (Machine) | Remada iso-lateral maquina | Horizontal pull / back | Machine | Chest supported if possible, do not rotate torso. |
| Lat Pulldown - Underhand (Cable) | Puxada alta pegada supinada | Vertical pull / lats and biceps | Cable | Firm torso, do not throw body backward. |
| Cable Crossover | Crucifixo / crossover no cabo | Chest fly / chest | Cable | Moderate load, do not force shoulder stretch. |
| Reverse Fly (Machine) | Crucifixo inverso maquina | Rear delts / posterior shoulder | Machine | Controlled movement, no rotator cuff pain. |
| Bicep Curl (Machine) | Rosca biceps maquina | Elbow flexion / biceps | Machine | Elbows supported, no swinging. |
| Lying Leg Curl (Machine) | Mesa flexora deitada | Knee flexion / hamstrings | Machine | Do not lift hips, controlled return. |
| Hip Abduction (Machine) | Abdutora | Hip abduction / glute medius | Machine | Torso still, do not rotate hip. |
| Glute Kickback (Machine) | Coice gluteo maquina | Hip extension / glutes | Machine | Move through hip, no lumbar compensation. |
| Plank | Prancha | Anti-extension / core | Bodyweight | Neutral spine, stop before posture breaks. |
| Shoulder Press (Machine) | Desenvolvimento maquina | Vertical push / shoulders | Machine | Neutral grip if possible, pain-free range. |
| Preacher Curl (Machine) | Rosca Scott maquina | Elbow flexion / biceps | Machine | Fixed elbows, comfortable range. |
| Hammer Curl (Dumbbell) | Rosca martelo com halteres | Elbow flexion / brachialis and biceps | Dumbbell | Neutral wrist, no torso swinging. |
| Triceps Extension (Cable) | Extensao de triceps no cabo | Elbow extension / triceps | Cable | Fixed elbows, full control. |
| Elliptical / Transport | Transport / Eliptico | Zone 2 cardio | Cardio | Sustainable pace, low impact. |
| Mobility | Mobilidade leve | Mobility | Bodyweight | No forced lumbar twisting, no pain. |

## Normalization Notes

- Repeated exercises across templates must reference the same exercise record.
- Template-specific sets, reps, rest and execution notes belong to workout
  templates, not to the exercise library.
- Cardio and mobility can exist in the library only as selectable template
  activities for the MVP workout flow.
