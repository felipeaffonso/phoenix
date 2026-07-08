## Why

Phoenix should support personal trainers and training professionals after the
individual MVP is stable. A professional needs to sign in to the same Web App,
manage students, create workout templates and assign training to students
without becoming a separate product or separate tenant model.

## What Changes

- Define `PROFESSIONAL` as a future system role alongside existing role-based
  access control.
- Define the relationship between a professional profile and student profiles.
- Define how a professional can invite, link, view and manage assigned
  students.
- Define professional permissions for managing their own exercise catalog
  entries, workout templates and assigned student training plans.
- Define how a professional assigns workout templates to students.
- Define how a professional reviews student workout history and execution
  feedback.
- Define permission boundaries between `ADMIN`, `PROFESSIONAL` and `ATHLETE`.
- Define audit requirements for professional actions that affect students.

## Non-goals

- No MVP implementation.
- No code implementation.
- No final UI design.
- No billing, subscriptions or marketplace behavior.
- No organization, gym, team or multi-tenant account hierarchy.
- No public professional discovery.
- No AI coach behavior.
- No health, nutrition, wearable integration or medical behavior.

## Capabilities

### New Capabilities

- `professional-portal`: Professional access, student management, template
  assignment and student history review.

### Modified Capabilities

- `authorization`: Future `PROFESSIONAL` role and professional-specific
  permissions.
- `user-profiles`: Professional profile data and student relationship
  references.
- `workout-templates`: Professional-owned templates and assignment to
  students.
- `workout-history`: Professional read access to assigned student history.
- `exercise-library`: Professional-managed exercise entries if approved during
  planning.

## Impact

- This is a product backlog proposal, not part of the frozen MVP.
- The MVP identity/access foundation should avoid assumptions that make adding
  the `PROFESSIONAL` role difficult later.
- Professional access should use the same authentication system and role-based
  authorization model as the rest of Phoenix.
- Student access remains owned by the student account; professional access is
  permissioned through explicit student-professional relationships.
- Planning must decide whether professional-created exercises are private to
  the professional, visible to assigned students or eligible for admin approval
  into the global exercise catalog.

## ADR

No ADR is expected for adding a role and permissioned relationships. An ADR may
be required later if the design introduces organizations, true multi-tenancy,
marketplace behavior or external identity provider changes.
