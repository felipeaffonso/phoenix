## MODIFIED Requirements

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

#### Scenario: No infrastructure ownership
- **WHEN** exercise schema or seed data is added
- **THEN** it SHALL live in the `phoenix` product repository and not in
  `phoenix-infra`

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

#### Scenario: Schema lives in product repository
- **WHEN** the exercise schema is implemented
- **THEN** schema files SHALL live in this repository

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

#### Scenario: No write endpoints
- **WHEN** the initial exercise API is implemented
- **THEN** it SHALL NOT expose create, update or delete endpoints

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

#### Scenario: Seed data stays in product repository
- **WHEN** initial exercise seed data is implemented
- **THEN** seed data SHALL live in this repository and not in `phoenix-infra`
