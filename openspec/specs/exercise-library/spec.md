# Exercise Library Specification

## Purpose

Define the MVP exercise library capability used by workout templates and workout
execution.

## Requirements

### Requirement: Exercise module boundary
Phoenix SHALL implement exercise library behavior inside the `exercise` backend
module.

#### Scenario: Backend package
- **WHEN** backend code for the exercise library is added
- **THEN** it SHALL live under `dev.affonsera.phoenix.exercise`

#### Scenario: Module ownership
- **WHEN** exercise library behavior is implemented
- **THEN** the module SHALL own the exercise domain model, repository,
  database table, read API and initial seed data

#### Scenario: Out-of-bound behavior
- **WHEN** workout-template-specific sets, reps, rest times, execution notes or
  progression rules are implemented
- **THEN** they SHALL NOT be owned by the exercise module

### Requirement: Exercise identity
Phoenix SHALL identify exercises with stable UUIDs.

#### Scenario: Exercise creation
- **WHEN** an exercise is created by seed data or application behavior
- **THEN** the exercise SHALL receive a UUID identity

#### Scenario: Exercise reference
- **WHEN** workout templates or workout history reference an exercise
- **THEN** they SHALL reference the exercise UUID and not a copied exercise
  name

#### Scenario: API response
- **WHEN** exercise data is returned by the API
- **THEN** the response SHALL expose the UUID as `id`

### Requirement: Exercise domain fields
Phoenix SHALL store the documented exercise domain fields.

#### Scenario: Exercise record
- **WHEN** an exercise record is persisted
- **THEN** it SHALL include `id`, `name`, `namePt`, `movementPattern`,
  `bodyArea`, `equipmentType`, `defaultSafetyNotes` and `active`

#### Scenario: Required names
- **WHEN** an exercise record is persisted
- **THEN** `name` and `namePt` SHALL be required, trimmed and non-empty

#### Scenario: Safety notes
- **WHEN** default safety guidance is stored
- **THEN** it SHALL be stored as plain text in `defaultSafetyNotes`

### Requirement: Exercise enum values
Phoenix SHALL use documented enum values for exercise classification.

#### Scenario: Movement pattern
- **WHEN** an exercise movement pattern is stored or returned
- **THEN** it SHALL be one of `HORIZONTAL_PUSH`, `INCLINE_PUSH`,
  `VERTICAL_PUSH`, `HORIZONTAL_PULL`, `VERTICAL_PULL`, `CHEST_FLY`,
  `SHOULDER_ABDUCTION`, `REAR_DELT_FLY`, `ELBOW_FLEXION`, `ELBOW_EXTENSION`,
  `KNEE_EXTENSION`, `KNEE_FLEXION`, `HIP_EXTENSION`, `HIP_ABDUCTION`,
  `UNILATERAL_SQUAT`, `CALF_RAISE`, `TRUNK_FLEXION`, `ANTI_EXTENSION_CORE`,
  `ZONE_2_CARDIO` or `MOBILITY`

#### Scenario: Body area
- **WHEN** an exercise body area is stored or returned
- **THEN** it SHALL be one of `CHEST`, `UPPER_CHEST`, `BACK`, `LATS`,
  `SHOULDERS`, `LATERAL_DELTS`, `REAR_DELTS`, `TRICEPS`, `BICEPS`, `QUADS`,
  `HAMSTRINGS`, `GLUTES`, `GLUTE_MEDIUS`, `CALVES`, `ABS`, `CORE`, `CARDIO`
  or `MOBILITY`

#### Scenario: Equipment type
- **WHEN** an exercise equipment type is stored or returned
- **THEN** it SHALL be one of `MACHINE`, `CABLE`, `DUMBBELL`, `BODYWEIGHT`,
  `SMITH_MACHINE`, `CARDIO_MACHINE` or `MIXED`

### Requirement: Exercise persistence schema
Phoenix SHALL persist exercises in a PostgreSQL table named `exercises`.

#### Scenario: Table structure
- **WHEN** the exercise schema is created
- **THEN** it SHALL include columns `id uuid`, `name varchar(120)`,
  `name_pt varchar(160)`, `movement_pattern varchar(60)`,
  `body_area varchar(60)`, `equipment_type varchar(60)`,
  `default_safety_notes text`, `active boolean`, `created_at timestamptz` and
  `updated_at timestamptz`

#### Scenario: Required constraints
- **WHEN** the exercise schema is created
- **THEN** `id`, `name`, `name_pt`, `movement_pattern`, `body_area`,
  `equipment_type`, `active`, `created_at` and `updated_at` SHALL be non-null

#### Scenario: Name uniqueness
- **WHEN** the exercise schema is created
- **THEN** it SHALL enforce unique canonical exercise names ignoring case via
  `lower(name)`

#### Scenario: Query indexes
- **WHEN** the exercise schema is created
- **THEN** it SHALL include indexes for `active`, `movement_pattern` and
  `body_area`

### Requirement: Exercise read API
Phoenix SHALL expose a read-only exercise API for the initial implementation.

#### Scenario: List exercises
- **WHEN** a client requests `GET /api/exercises`
- **THEN** the API SHALL return exercise records with `id`, `name`, `namePt`,
  `movementPattern`, `bodyArea`, `equipmentType`, `defaultSafetyNotes` and
  `active`

#### Scenario: Default active filter
- **WHEN** a client requests `GET /api/exercises` without an `active` query
  parameter
- **THEN** the API SHALL return active exercises by default

#### Scenario: Optional filters
- **WHEN** a client requests `GET /api/exercises` with `active`,
  `movementPattern`, `bodyArea` or `equipmentType`
- **THEN** the API SHALL filter results by the supplied valid parameters

#### Scenario: Get exercise by id
- **WHEN** a client requests `GET /api/exercises/{id}` for an existing exercise
- **THEN** the API SHALL return that exercise

#### Scenario: Exercise not found
- **WHEN** a client requests `GET /api/exercises/{id}` for a missing exercise
- **THEN** the API SHALL return `404`

### Requirement: Exercise seed data
Phoenix SHALL include initial exercise seed data in the product repository.

#### Scenario: Seed stability
- **WHEN** initial exercises are seeded
- **THEN** each seed record SHALL use a stable UUID

#### Scenario: Seed idempotency
- **WHEN** seed logic is run more than once
- **THEN** it SHALL not create duplicate exercise records

#### Scenario: Initial catalog coverage
- **WHEN** the first exercise library implementation ships
- **THEN** it SHALL include the initial catalog documented in
  `docs/mvp/EXERCISE_LIBRARY.md`

### Requirement: Exercise validation
Phoenix SHALL validate exercise library data according to documented limits.

#### Scenario: Name limits
- **WHEN** exercise names are accepted by code or seed data
- **THEN** `name` SHALL be at most 120 characters and `namePt` SHALL be at
  most 160 characters

#### Scenario: Safety note limits
- **WHEN** safety notes are accepted by code or seed data
- **THEN** `defaultSafetyNotes` SHALL be null or at most 2000 characters after
  trimming
