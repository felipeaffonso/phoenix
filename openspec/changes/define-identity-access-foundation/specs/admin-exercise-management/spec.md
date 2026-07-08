## ADDED Requirements

### Requirement: Exercise admin dependency
Phoenix SHALL require identity and authorization planning before exercise
administration implementation.

#### Scenario: Exercise admin implementation
- **WHEN** exercise create, edit or deactivate behavior is implemented
- **THEN** authentication, user profiles and authorization SHALL already have
  accepted OpenSpec planning artifacts

#### Scenario: Exercise read-only implementation
- **WHEN** read-only exercise endpoints are implemented before admin screens
- **THEN** they SHALL not include write behavior or bypass future admin
  permission requirements
