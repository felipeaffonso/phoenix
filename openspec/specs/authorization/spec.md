# Authorization Specification

## Purpose

Define Phoenix roles and permissions for protecting MVP application behavior.

## Requirements

### Requirement: Role-based authorization
Phoenix SHALL authorize protected behavior using role-based permissions.

#### Scenario: Permission check
- **WHEN** a user requests a protected action
- **THEN** the system SHALL check whether the user's assigned roles grant the
  required permission

#### Scenario: Missing permission
- **WHEN** a user lacks the required permission for an action
- **THEN** the system SHALL reject the action

### Requirement: MVP roles
Phoenix SHALL define MVP roles for administration and normal application use.

#### Scenario: Admin role
- **WHEN** a user has the `ADMIN` role
- **THEN** the user SHALL be allowed to manage users, roles and exercise
  catalog administration

#### Scenario: Athlete role
- **WHEN** a user has the `ATHLETE` role
- **THEN** the user SHALL be allowed to use workout execution features assigned
  to normal users

### Requirement: Exercise catalog permissions
Phoenix SHALL protect global exercise catalog write actions with administrative
permissions and private exercise write actions with ownership permissions.

#### Scenario: Admin manages global exercises
- **WHEN** an `ADMIN` user creates, edits or deactivates a global exercise
- **THEN** the system SHALL allow the action if validation passes

#### Scenario: Athlete creates a private exercise
- **WHEN** an `ATHLETE` user creates a valid private exercise for their own use
- **THEN** the system SHALL allow the action and associate the exercise with
  that user's UUID

#### Scenario: Athlete manages own private exercise
- **WHEN** an `ATHLETE` user edits or deactivates a private exercise they own
- **THEN** the system SHALL allow the action if validation passes

#### Scenario: Athlete cannot manage global exercises
- **WHEN** an `ATHLETE` user attempts to create, edit or deactivate a global
  exercise
- **THEN** the system SHALL reject the action

#### Scenario: Athlete cannot manage another user's private exercise
- **WHEN** an `ATHLETE` user attempts to edit or deactivate a private exercise
  owned by another user
- **THEN** the system SHALL reject the action

### Requirement: User management permissions
Phoenix SHALL protect user and role management with administrative permissions.

#### Scenario: Admin manages users
- **WHEN** an `ADMIN` user creates, deactivates or changes roles for a user
- **THEN** the system SHALL allow the action if validation passes

#### Scenario: Athlete cannot manage users
- **WHEN** an `ATHLETE` user attempts to create, deactivate or change roles for
  a user
- **THEN** the system SHALL reject the action

### Requirement: Authorization tests
Phoenix SHALL test role and permission enforcement.

#### Scenario: Protected admin behavior
- **WHEN** authorization is implemented
- **THEN** tests SHALL cover allowed admin actions and rejected non-admin
  actions
