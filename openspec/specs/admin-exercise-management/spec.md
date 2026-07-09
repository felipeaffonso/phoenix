# Admin Exercise Management Specification

## Purpose

Define administrative behavior for creating, editing and deactivating global
exercises in the Phoenix exercise catalog.

This is an administrative surface for the MVP Exercise Library capability, not
a separate MVP module.

## Requirements

### Requirement: Exercise administration surface
Phoenix SHALL provide an administrative surface for managing the global
exercise catalog.

#### Scenario: Admin access
- **WHEN** an `ADMIN` user opens exercise administration
- **THEN** the system SHALL provide access to create, edit and deactivate
  global exercises

#### Scenario: Non-admin access
- **WHEN** a user without exercise-management permission opens exercise
  administration
- **THEN** the system SHALL deny access

### Requirement: Exercise creation
Phoenix SHALL allow authorized administrators to create global exercises.

#### Scenario: Valid exercise creation
- **WHEN** an `ADMIN` user submits a valid new exercise
- **THEN** the system SHALL create an active global exercise with a stable UUID

#### Scenario: Duplicate exercise name
- **WHEN** an `ADMIN` user submits an exercise name that already exists
  ignoring case
- **THEN** the system SHALL reject the request

### Requirement: Exercise editing
Phoenix SHALL allow authorized administrators to edit global exercise metadata.

#### Scenario: Valid exercise edit
- **WHEN** an `ADMIN` user edits exercise name, Portuguese name,
  classification or safety notes with valid values
- **THEN** the system SHALL save the changes

#### Scenario: Invalid exercise edit
- **WHEN** an `ADMIN` user submits invalid exercise metadata
- **THEN** the system SHALL reject the request

### Requirement: Exercise deactivation
Phoenix SHALL deactivate global exercises instead of deleting them when they may be
referenced by templates or history.

#### Scenario: Deactivate exercise
- **WHEN** an `ADMIN` user deactivates an exercise
- **THEN** the system SHALL mark the exercise inactive

#### Scenario: Preserve references
- **WHEN** an exercise is inactive
- **THEN** existing workout templates or history references SHALL remain
  readable

### Requirement: Exercise management audit fields
Phoenix SHALL track basic timestamps for exercise management.

#### Scenario: Create timestamp
- **WHEN** an exercise is created
- **THEN** the system SHALL record `created_at` and `updated_at`

#### Scenario: Update timestamp
- **WHEN** an exercise is edited or deactivated
- **THEN** the system SHALL update `updated_at`

### Requirement: Private exercise separation
Phoenix SHALL keep athlete-owned private exercise management separate from the
administrative global catalog surface.

#### Scenario: Admin surface excludes private exercises by default
- **WHEN** an `ADMIN` user opens exercise administration
- **THEN** the system SHALL show and manage global catalog exercises by default

#### Scenario: Athlete private exercise ownership
- **WHEN** an `ATHLETE` user creates, edits or deactivates a private exercise
- **THEN** that behavior SHALL be governed by owner permissions, not by the
  global exercise administration surface
