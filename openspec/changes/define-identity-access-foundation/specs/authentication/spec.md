## ADDED Requirements

### Requirement: Authentication implementation strategy
Phoenix SHALL document the authentication implementation strategy before auth
code is written.

#### Scenario: Strategy selection
- **WHEN** authentication implementation begins
- **THEN** the selected session or token strategy SHALL be documented in the
  active OpenSpec change or a follow-up ADR if architectural impact requires it

#### Scenario: No external provider by default
- **WHEN** MVP authentication is planned
- **THEN** external OAuth, SSO or social login SHALL remain out of scope unless
  explicitly approved in a new OpenSpec change
