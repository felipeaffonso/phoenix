# Exercise Library Specification

## Purpose

Define the MVP exercise library capability used by workout templates and workout
execution, including global catalog exercises and athlete-owned private
exercises.

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
  database table, ownership rules, read API, private exercise write API and
  initial seed data

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

### Requirement: Exercise ownership and visibility
Phoenix SHALL support global exercises and athlete-owned private exercises in
the Exercise Library.

#### Scenario: Global exercise
- **WHEN** an exercise belongs to the canonical catalog
- **THEN** it SHALL have `scope` set to `GLOBAL` and no `ownerUserId`

#### Scenario: Private exercise
- **WHEN** an `ATHLETE` creates an exercise for their own use
- **THEN** it SHALL have `scope` set to `USER` and `ownerUserId` set to that
  user's stable UUID

#### Scenario: Private exercise visibility
- **WHEN** an authenticated user lists available exercises
- **THEN** the system SHALL include global exercises and private exercises owned
  by that user, and SHALL NOT include private exercises owned by other users

#### Scenario: No MVP promotion flow
- **WHEN** an athlete-owned private exercise exists
- **THEN** the MVP SHALL NOT provide a workflow to promote it into the global
  catalog

### Requirement: Exercise domain fields
Phoenix SHALL store the documented exercise domain fields.

#### Scenario: Exercise record
- **WHEN** an exercise record is persisted
- **THEN** it SHALL include `id`, `scope`, `ownerUserId`, `name`, `namePt`,
  `movementPattern`, `bodyArea`, `equipmentType`, `defaultSafetyNotes` and
  `active`

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
- **THEN** it SHALL include columns `id uuid`, `scope varchar(20)`,
  `owner_user_id uuid`, `name varchar(120)`, `name_pt varchar(160)`,
  `movement_pattern varchar(60)`, `body_area varchar(60)`,
  `equipment_type varchar(60)`, `default_safety_notes text`, `active boolean`,
  `created_at timestamptz` and `updated_at timestamptz`

#### Scenario: Required constraints
- **WHEN** the exercise schema is created
- **THEN** `id`, `scope`, `name`, `name_pt`, `movement_pattern`, `body_area`,
  `equipment_type`, `active`, `created_at` and `updated_at` SHALL be non-null

#### Scenario: Ownership constraints
- **WHEN** the exercise schema is created
- **THEN** it SHALL require `owner_user_id` to be null for `GLOBAL` exercises
  and non-null for `USER` exercises

#### Scenario: Global name uniqueness
- **WHEN** the exercise schema is created
- **THEN** it SHALL enforce unique global exercise names ignoring case via
  `lower(name)` for records with `scope = 'GLOBAL'`

#### Scenario: Private name uniqueness
- **WHEN** the exercise schema is created
- **THEN** it SHALL enforce unique private exercise names ignoring case per
  `owner_user_id`

#### Scenario: Query indexes
- **WHEN** the exercise schema is created
- **THEN** it SHALL include indexes for `scope`, `owner_user_id`, `active`,
  `movement_pattern` and `body_area`

### Requirement: Exercise read API
Phoenix SHALL expose a read-only exercise API for the initial implementation.

#### Scenario: List exercises
- **WHEN** a client requests `GET /api/exercises`
- **THEN** the API SHALL return exercise records with `id`, `scope`,
  `ownerUserId`, `name`, `namePt`, `movementPattern`, `bodyArea`,
  `equipmentType`, `defaultSafetyNotes` and `active`

#### Scenario: Default active filter
- **WHEN** a client requests `GET /api/exercises` without an `active` query
  parameter
- **THEN** the API SHALL return active exercises by default

#### Scenario: Optional filters
- **WHEN** a client requests `GET /api/exercises` with `active`, `scope`,
  `movementPattern`, `bodyArea` or `equipmentType`
- **THEN** the API SHALL filter results by the supplied valid parameters

#### Scenario: Get exercise by id
- **WHEN** a client requests `GET /api/exercises/{id}` for an existing exercise
- **THEN** the API SHALL return that exercise

#### Scenario: Exercise not found
- **WHEN** a client requests `GET /api/exercises/{id}` for a missing exercise
- **THEN** the API SHALL return `404`

#### Scenario: Private exercise not visible to another user
- **WHEN** a client requests `GET /api/exercises/{id}` for a private exercise
  owned by another user
- **THEN** the API SHALL return `404` or another non-disclosing rejection

### Requirement: Private exercise write API
Phoenix SHALL allow authenticated athletes to create, edit and deactivate their
own private exercises.

#### Scenario: Create private exercise
- **WHEN** an authenticated `ATHLETE` submits a valid private exercise request
- **THEN** the API SHALL create an active exercise with `scope` set to `USER`
  and `ownerUserId` set to the authenticated user's UUID

#### Scenario: Friendly private exercise creation contract
- **WHEN** an authenticated `ATHLETE` creates a private exercise
- **THEN** the API contract SHALL support a user-friendly form with required
  `name`, `movementPattern`, `bodyArea` and `equipmentType`, and optional
  `namePt` and `defaultSafetyNotes`

#### Scenario: Private Portuguese name default
- **WHEN** an authenticated `ATHLETE` creates a private exercise without
  `namePt`
- **THEN** the system SHALL store the submitted `name` as `namePt`

#### Scenario: Edit own private exercise
- **WHEN** an authenticated user submits valid changes for a private exercise
  they own
- **THEN** the API SHALL save the changes and update `updated_at`

#### Scenario: Deactivate own private exercise
- **WHEN** an authenticated user deactivates a private exercise they own
- **THEN** the API SHALL mark the exercise inactive without deleting it

#### Scenario: Cannot write another user's private exercise
- **WHEN** an authenticated user attempts to edit or deactivate another user's
  private exercise
- **THEN** the system SHALL reject the action

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
