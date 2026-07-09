# Replit Frontend Brief

This is the source-of-truth prompt for building the first Phoenix frontend in Replit.

Use this file as the instruction document. Do not infer product behavior from chat history. If something conflicts with repository documentation, follow the authority order in `PHOENIX_CONSTITUTION.md`.

## Objective

Build the first usable Phoenix Web App frontend inside this repository so the product owner can see and evaluate the MVP workflow before the backend is fully implemented.

The goal is a functional frontend prototype using local mock data and stable API-shaped adapters. It must make the Exercise Library, private athlete exercises and the workout app shell visible and easy to iterate.

## Repository Rules

- Work inside the existing `phoenix` repository.
- Create the frontend under `src/frontend`.
- Do not create a separate repository.
- Do not modify backend files under `src/main` or `src/test` unless explicitly instructed later.
- Do not change `pom.xml`, Java code, OpenSpec specs, ADRs or infrastructure files.
- Do not add Docker, deployment, hosting, database or infrastructure configuration.
- Keep Phoenix product code in this repository and infrastructure out of this repository.

## Required Reading Before Coding

Read these files before generating code:

1. `PHOENIX_CONSTITUTION.md`
2. `README.md`
3. `docs/adr/0001-record-application-architecture.md`
4. `docs/adr/0002-use-spring-security-for-application-security.md`
5. `docs/mvp/README.md`
6. `docs/mvp/EXERCISE_LIBRARY.md`
7. `docs/mvp/WORKOUT_TEMPLATES.md`
8. `openspec/specs/application-architecture/spec.md`
9. `openspec/specs/authentication/spec.md`
10. `openspec/specs/authorization/spec.md`
11. `openspec/specs/user-profiles/spec.md`
12. `openspec/specs/exercise-library/spec.md`
13. `openspec/specs/admin-exercise-management/spec.md`

## Stack

Use the official Phoenix frontend stack:

- Next.js
- TypeScript
- PWA-ready structure

Use a normal `src/frontend` project layout. Prefer simple, conventional Next.js patterns over custom architecture.

Recommended default:

- Next.js App Router
- TypeScript strict mode
- CSS Modules or a simple global CSS setup
- Local mock data in the frontend project
- No backend calls yet unless behind a replaceable adapter

## Product Language

The UI should be in Portuguese.

Code identifiers, types and API-shaped fields should remain in English to match backend/OpenSpec contracts.

## First Experience

Do not build a marketing landing page.

The first screen should be the actual Phoenix app shell in a mocked authenticated state.

Start with an `ATHLETE` user by default. Include a small development-only role switcher so the product owner can inspect `ATHLETE` and `ADMIN` behavior.

## Initial Navigation

Build a compact app shell with these areas:

- Dashboard
- Exercise Library
- Workout Templates
- Workout Player Preview
- Workout History Preview
- Admin, visible only when role is `ADMIN`

Only Exercise Library needs to be functionally useful in this first pass. Other sections may be realistic previews using mock data.

## Core Exercise Contract

Use this TypeScript shape for exercises:

```ts
export type ExerciseScope = 'GLOBAL' | 'USER';

export type MovementPattern =
  | 'HORIZONTAL_PUSH'
  | 'INCLINE_PUSH'
  | 'VERTICAL_PUSH'
  | 'HORIZONTAL_PULL'
  | 'VERTICAL_PULL'
  | 'CHEST_FLY'
  | 'SHOULDER_ABDUCTION'
  | 'REAR_DELT_FLY'
  | 'ELBOW_FLEXION'
  | 'ELBOW_EXTENSION'
  | 'KNEE_EXTENSION'
  | 'KNEE_FLEXION'
  | 'HIP_EXTENSION'
  | 'HIP_ABDUCTION'
  | 'UNILATERAL_SQUAT'
  | 'CALF_RAISE'
  | 'TRUNK_FLEXION'
  | 'ANTI_EXTENSION_CORE'
  | 'ZONE_2_CARDIO'
  | 'MOBILITY';

export type BodyArea =
  | 'CHEST'
  | 'UPPER_CHEST'
  | 'BACK'
  | 'LATS'
  | 'SHOULDERS'
  | 'LATERAL_DELTS'
  | 'REAR_DELTS'
  | 'TRICEPS'
  | 'BICEPS'
  | 'QUADS'
  | 'HAMSTRINGS'
  | 'GLUTES'
  | 'GLUTE_MEDIUS'
  | 'CALVES'
  | 'ABS'
  | 'CORE'
  | 'CARDIO'
  | 'MOBILITY';

export type EquipmentType =
  | 'MACHINE'
  | 'CABLE'
  | 'DUMBBELL'
  | 'BODYWEIGHT'
  | 'SMITH_MACHINE'
  | 'CARDIO_MACHINE'
  | 'MIXED';

export type Exercise = {
  id: string;
  scope: ExerciseScope;
  ownerUserId: string | null;
  name: string;
  namePt: string;
  movementPattern: MovementPattern;
  bodyArea: BodyArea;
  equipmentType: EquipmentType;
  defaultSafetyNotes: string | null;
  active: boolean;
};
```

## Exercise Rules

Global exercises:

- `scope = 'GLOBAL'`
- `ownerUserId = null`
- visible to every user
- editable only from the admin surface

Private athlete exercises:

- `scope = 'USER'`
- `ownerUserId = currentUser.id`
- visible only to the owning user
- can be created, edited and deactivated by the owning athlete
- must not be visible to other athletes
- must not be promoted to the global catalog in the MVP

## Exercise Library Screen

Build this screen as the most complete part of the prototype.

It should include:

- Search by name
- Filters for active status, scope, body area, movement pattern and equipment
- A table or dense list of exercises
- Clear visual distinction between global and private exercises
- Empty state for no results
- Details panel or drawer for the selected exercise
- Create private exercise action for `ATHLETE`
- Edit/deactivate private exercise actions only for exercises owned by the current user
- No global edit actions for `ATHLETE`
- Admin area or admin mode for managing global exercises

## Private Exercise Creation UX

The private exercise creation flow should be friendly and not overly technical.

Required user-facing fields:

- Nome do exercício
- Área do corpo
- Equipamento
- Padrão de movimento

Optional user-facing fields:

- Nome em português, defaulting to the exercise name when empty
- Notas de segurança

Behavior:

- If `namePt` is empty, store the same value as `name`.
- Created private exercises should appear immediately in the Exercise Library.
- Private exercises should use mock persistence in browser/local state for now.
- Validation should prevent empty required fields.

## Workout Templates Preview

Create a realistic read-only preview based on `docs/mvp/WORKOUT_TEMPLATES.md` and `docs/training/TEMPLATE-*.md`.

It should show:

- Template names such as Upper A, Lower A, Recovery + Cardio, Upper B, Lower B, Shoulders + Arms
- Focus/day labels
- Grouped exercise preview
- Clear indication that template execution and editing are not implemented yet

Do not invent final backend schemas for templates. Keep this as a visual prototype.

## Workout Player Preview

Create a preview screen that helps evaluate the workout execution direction.

It may use mock data and should show:

- Current exercise or group
- Target reps/time/failure
- Suggested load placeholder
- Rest timer placeholder
- Pain/instability quick note affordance
- Completed set rows

Do not implement real workout history persistence yet.

## Admin Preview

When the role switcher is set to `ADMIN`, show an Admin area for global exercise catalog management.

For now it can be mock-only, but it must communicate the product boundary:

- Admin manages global exercises.
- Athlete private exercises are separate and owner-scoped.
- Admin surface should not show private exercises by default.

## Data Layer

Create a small frontend data layer with mock adapters so backend integration is easy later.

Recommended shape:

```ts
listExercises(filters): Promise<Exercise[]>
getExercise(id): Promise<Exercise | null>
createPrivateExercise(input): Promise<Exercise>
updatePrivateExercise(id, input): Promise<Exercise>
deactivatePrivateExercise(id): Promise<Exercise>
```

Do not hardwire UI directly to raw arrays throughout the app. Keep the mock data behind these functions.

## Design Direction

Phoenix is a serious workout execution app, not a marketing site.

Use a dense, calm, operational interface:

- restrained visual styling
- clear hierarchy
- compact navigation
- readable tables/lists
- fast scanning
- useful empty states
- no oversized hero sections
- no decorative landing page
- no purple-heavy gradient theme
- no beige/brown lifestyle theme

The product should feel like a focused training operating system.

## Non-Goals

Do not implement:

- Real authentication
- Backend integration
- Database behavior
- Workout execution persistence
- Progression engine calculations
- Nutrition
- Health tracking
- Wearable integrations
- AI coach
- Professional trainer portal
- Billing
- Multi-tenant organizations
- Public marketing pages

## Expected Output

Create a runnable frontend project under `src/frontend`.

The result should let the product owner run the frontend, inspect the mocked app, create private exercises as an athlete and switch to admin mode to inspect global catalog boundaries.

Include a short `src/frontend/README.md` with:

- setup command
- dev command
- build command
- where mock data lives
- which screens are implemented
- which parts are intentionally mock-only

## Prompt To Use In Replit

Use this prompt in Replit:

```text
Read docs/frontend/REPLIT_FRONTEND_BRIEF.md and build the Phoenix frontend exactly as specified. Work only under src/frontend unless the brief explicitly says otherwise. Do not modify backend, OpenSpec, ADR, infrastructure or Maven files. Use Next.js and TypeScript. Keep data mocked behind adapter functions so backend integration can replace the mocks later.
```
