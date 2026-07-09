## ADDED Requirements

### Requirement: Exercise admin dependency
Phoenix SHALL require identity and authorization planning before global exercise
administration implementation.

#### Scenario: Exercise admin implementation
- **WHEN** global exercise create, edit or deactivate behavior is implemented
- **THEN** authentication, user profiles and authorization SHALL already have
  accepted OpenSpec planning artifacts

#### Scenario: Exercise read-only implementation
- **WHEN** read-only exercise endpoints are implemented before admin screens
- **THEN** they SHALL not include write behavior or bypass future admin
  permission requirements

### Requirement: Athlete private exercise separation
Phoenix SHALL keep athlete-owned private exercise management outside global
exercise administration.

#### Scenario: Private exercise management
- **WHEN** an `ATHLETE` creates, edits or deactivates a private exercise
- **THEN** the behavior SHALL use owner permissions instead of global exercise
  administration permissions

#### Scenario: No private-to-global promotion in MVP
- **WHEN** a private athlete exercise exists
- **THEN** the MVP SHALL NOT provide a promotion workflow into the global
  exercise catalog
