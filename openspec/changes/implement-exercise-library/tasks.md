## 1. Module Foundation

- [ ] 1.0 Confirm `define-identity-access-foundation` Proposal and Planning are
      complete before applying this change.
- [ ] 1.1 Create package `dev.affonsera.phoenix.exercise`.
- [ ] 1.2 Add Java enums for `MovementPattern`, `BodyArea` and `EquipmentType`
      using the OpenSpec values.
- [ ] 1.3 Add the `Exercise` domain model with UUID identity and documented
      fields.
- [ ] 1.4 Add domain validation for required fields, enum values and length
      limits.

## 2. Persistence

- [ ] 2.1 Decide and document the PostgreSQL test strategy before claiming
      repository behavior is tested.
- [ ] 2.2 Add the `exercises` table schema in the product repository.
- [ ] 2.3 Add required indexes and case-insensitive unique name constraint.
- [ ] 2.4 Add Spring Data JDBC repository code for exercise reads.
- [ ] 2.5 Add idempotent seed data with stable UUIDs for the initial catalog.

## 3. API

- [ ] 3.1 Add response DTO for exercise API output.
- [ ] 3.2 Add `GET /api/exercises` with default `active=true` filtering.
- [ ] 3.3 Add optional filters for `active`, `movementPattern`, `bodyArea` and
      `equipmentType`.
- [ ] 3.4 Add `GET /api/exercises/{id}`.
- [ ] 3.5 Return `404` for missing exercise IDs.
- [ ] 3.6 Do not add create, update or delete endpoints.

## 4. Tests

- [ ] 4.1 Add unit tests for enum mapping and domain validation.
- [ ] 4.2 Add API tests for list, filters, get-by-id and not-found behavior.
- [ ] 4.3 Add repository or migration tests after the PostgreSQL test strategy
      is documented.
- [ ] 4.4 Keep the generated Spring Boot context smoke test passing.

## 5. Documentation And Validation

- [ ] 5.1 Update module documentation if implementation decisions differ from
      the current blueprint.
- [ ] 5.2 Run `openspec validate implement-exercise-library`.
- [ ] 5.3 Run `openspec validate --specs`.
- [ ] 5.4 Run Maven tests.
- [ ] 5.5 After implementation is accepted, archive or sync the change into
      OpenSpec main specs.
