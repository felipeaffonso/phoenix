# User Profiles Specification

## Purpose

Define the Phoenix user profile model used by authentication, authorization and
application ownership.

## Requirements

### Requirement: User profile identity
Phoenix SHALL maintain a user profile for each application user.

#### Scenario: Profile creation
- **WHEN** a user account is created
- **THEN** the system SHALL create or associate a user profile for that user

#### Scenario: Stable profile reference
- **WHEN** application records reference a user
- **THEN** they SHALL reference the stable user UUID

### Requirement: Profile fields
Phoenix SHALL store the minimum profile fields needed for MVP ownership and
administration.

#### Scenario: Required profile fields
- **WHEN** a user profile is persisted
- **THEN** it SHALL include user UUID, display name, email and active status

#### Scenario: Email uniqueness
- **WHEN** a user profile is persisted
- **THEN** email SHALL be unique ignoring case

### Requirement: User active status
Phoenix SHALL support deactivating a user without deleting historical
references.

#### Scenario: Deactivated user
- **WHEN** a user is deactivated
- **THEN** the system SHALL prevent new authenticated application access for
  that user

#### Scenario: Historical records
- **WHEN** a user is deactivated
- **THEN** existing records referencing that user SHALL remain intact

### Requirement: Administrative user creation
Phoenix SHALL support administrative creation of users for the MVP.

#### Scenario: Admin creates user
- **WHEN** an authorized administrator creates a user
- **THEN** the system SHALL create the user account, profile and initial role
  assignments

#### Scenario: Non-admin creates user
- **WHEN** a user without user-management permission attempts to create a user
- **THEN** the system SHALL reject the request
