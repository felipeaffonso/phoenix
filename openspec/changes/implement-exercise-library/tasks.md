## 1. Module Foundation

- [x] 1.0 Confirm this implementation is limited to read-only exercise APIs
      and defers private exercise write APIs until identity/access is accepted.
- [x] 1.1 Create package `dev.affonsera.phoenix.exercise`.
- [x] 1.2 Add Java enums for `MovementPattern`, `BodyArea` and `EquipmentType`
      using the OpenSpec values.
- [x] 1.3 Add the `Exercise` domain model with UUID identity, scope,
      ownership and documented fields.
- [x] 1.4 Add domain validation for required fields, enum values and length
      limits.

## 2. Persistence

- [x] 2.1 Document the local PostgreSQL profile and defer repository behavior
      claims until a repeatable database test strategy is accepted.
- [x] 2.2 Add the `exercises` table schema in the product repository.
- [x] 2.3 Add required indexes and case-insensitive unique name constraint.
- [x] 2.4 Add Spring Data JDBC repository code for exercise reads.
- [x] 2.5 Add idempotent seed data with stable UUIDs for the initial catalog.
- [x] 2.6 Add local datasource configuration that can reuse phoenix-infra
      PostgreSQL settings without committing secrets.

## 3. API

- [x] 3.1 Add response DTO for exercise API output.
- [x] 3.2 Add `GET /api/exercises` with default `active=true` filtering.
- [x] 3.3 Add optional filters for `active`, `scope`, `movementPattern`,
      `bodyArea` and `equipmentType`.
- [x] 3.4 Add `GET /api/exercises/{id}`.
- [x] 3.5 Return `404` for missing exercise IDs.
- [x] 3.6 Do not add global or private create, update or delete endpoints in
      this increment.

## 4. Tests

- [x] 4.1 Add unit tests for enum mapping and domain validation.
- [x] 4.2 Add authenticated API tests for list, filters, get-by-id and
      not-found behavior.
- [x] 4.3 Defer repository or migration tests until a repeatable PostgreSQL
      test strategy is accepted.
- [x] 4.4 Keep the generated Spring Boot context smoke test passing.

## 5. Documentation And Validation

- [x] 5.1 Update module documentation if implementation decisions differ from
      the current blueprint.
- [x] 5.2 Run `openspec validate implement-exercise-library`.
- [x] 5.3 Run `openspec validate --specs`.
- [x] 5.4 Run Maven tests.
- [ ] 5.5 After implementation is accepted, archive or sync the change into
      OpenSpec main specs.
