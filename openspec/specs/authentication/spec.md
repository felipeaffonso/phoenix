# Authentication Specification

## Purpose

Define how users prove identity before accessing Phoenix Web App features.

## Requirements

### Requirement: User authentication
Phoenix SHALL require users to authenticate before accessing MVP application
features.

#### Scenario: Unauthenticated access
- **WHEN** an unauthenticated user requests a protected application endpoint
- **THEN** the system SHALL reject the request

#### Scenario: Authenticated access
- **WHEN** an authenticated user requests a protected application endpoint
- **THEN** the system SHALL evaluate authorization for that user

### Requirement: Local account identity
Phoenix SHALL support local application user accounts for the MVP.

#### Scenario: User account exists
- **WHEN** a person is allowed to use the Phoenix Web App
- **THEN** the system SHALL represent that person with an application user
  account

#### Scenario: User identifier
- **WHEN** a user account is created
- **THEN** the system SHALL assign a stable UUID user identifier

### Requirement: Credential policy
Phoenix SHALL store user credentials securely.

#### Scenario: Password storage
- **WHEN** a password credential is stored
- **THEN** the system SHALL store only a secure password hash and never the raw
  password

#### Scenario: Password verification
- **WHEN** a user signs in with a password
- **THEN** the system SHALL verify the password against the stored hash

### Requirement: Session or token lifecycle
Phoenix SHALL use a documented authenticated session or token lifecycle.

#### Scenario: Successful sign-in
- **WHEN** a user successfully signs in
- **THEN** the system SHALL issue an authenticated session or token according
  to the implementation design

#### Scenario: Sign-out
- **WHEN** a user signs out
- **THEN** the system SHALL invalidate or stop accepting the current
  authenticated session or token according to the implementation design

### Requirement: Authentication auditability
Phoenix SHALL make authentication behavior testable and observable.

#### Scenario: Failed sign-in
- **WHEN** sign-in fails
- **THEN** the system SHALL return a generic authentication failure without
  revealing whether the account exists

#### Scenario: Auth tests
- **WHEN** authentication is implemented
- **THEN** tests SHALL cover successful sign-in, failed sign-in and protected
  endpoint rejection
