## Why

Phoenix needs a clear identity and access foundation before implementing domain
modules with administrative behavior. Exercise creation, user creation, role
assignment, workout ownership and future admin screens all depend on knowing
who the user is and what they are allowed to do.

## What Changes

- Define authentication requirements for MVP user access.
- Define user profile requirements for identity, ownership and active status.
- Define role-based authorization requirements for `ADMIN` and `ATHLETE`.
- Define administrative exercise management requirements before adding exercise
  write behavior.
- Reorder MVP implementation planning so identity/access comes before exercise
  administration and workout modules.

## Non-goals

- No code implementation.
- No final UI design for admin screens.
- No OAuth, SSO or social login.
- No billing, teams, organizations or multi-tenant account hierarchy.
- No health, nutrition, wearable integration or AI behavior.

## Capabilities

### New Capabilities

- `authentication`: User sign-in, protected endpoint access and credential
  behavior.
- `user-profiles`: User identity, profile fields, active status and
  administrative user creation.
- `authorization`: Roles, permissions and enforcement for MVP behavior.
- `admin-exercise-management`: Administrative surface for the MVP Exercise
  Library, covering creation, editing and deactivation of exercises.

### Modified Capabilities

- None.

## Impact

- Establishes the access-control foundation required before applying
  `implement-exercise-library`.
- Defines the minimum roles needed for early MVP: `ADMIN` and `ATHLETE`.
- Clarifies that exercise read behavior and exercise admin behavior are
  separate concerns inside the Exercise Library capability.
- May affect future backend packages, API routes and frontend admin navigation.
- Adds no new external dependencies at planning time.

## ADR

No ADR is required for planning. An ADR may be required later if implementation
chooses a non-default authentication architecture, external identity provider or
token/session strategy that changes the accepted architecture.
