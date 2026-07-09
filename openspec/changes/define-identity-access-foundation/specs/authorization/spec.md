## ADDED Requirements

### Requirement: Permission names
Phoenix SHALL define named permissions behind MVP roles.

#### Scenario: Admin permissions
- **WHEN** the `ADMIN` role is assigned
- **THEN** it SHALL grant permissions for user management, role management and
  global exercise catalog management

#### Scenario: Athlete permissions
- **WHEN** the `ATHLETE` role is assigned
- **THEN** it SHALL grant permissions for normal workout usage and managing
  athlete-owned private exercises, but not administrative management

#### Scenario: Exercise permission names
- **WHEN** exercise permissions are defined
- **THEN** they SHALL distinguish `exercise:read`, `exercise:create_own`,
  `exercise:update_own`, `exercise:deactivate_own`,
  `exercise:create_global`, `exercise:update_global` and
  `exercise:deactivate_global`

### Requirement: Authorization before write APIs
Phoenix SHALL define authorization requirements before adding write APIs.

#### Scenario: Exercise write API planning
- **WHEN** exercise create, update or deactivate endpoints are planned
- **THEN** the required permission SHALL be documented before implementation
