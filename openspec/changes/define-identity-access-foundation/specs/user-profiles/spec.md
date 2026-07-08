## ADDED Requirements

### Requirement: Profile ownership foundation
Phoenix SHALL use user profiles as the ownership foundation for future workout
records.

#### Scenario: Future workout ownership
- **WHEN** workout templates, sessions or history records are implemented
- **THEN** they SHALL be designed to reference the stable user UUID

#### Scenario: Deactivated owner
- **WHEN** a user profile is deactivated
- **THEN** records owned by that user SHALL remain readable to authorized
  administrators
