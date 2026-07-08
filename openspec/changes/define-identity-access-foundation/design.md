## Context

The current backend scaffold includes Spring Security, but Phoenix has not yet
defined its identity model, profile model or authorization model. The MVP
includes authentication and user profiles, and exercise administration depends
on permissions.

The existing exercise-library planning is intentionally paused until this
foundation is planned. This design defines the conceptual approach only; it does
not implement auth or admin screens.

## Goals / Non-Goals

**Goals:**

- Define the minimum identity/access model needed for the MVP.
- Keep authorization simple enough for a single-user-oriented product while
  still supporting admin behavior.
- Separate exercise catalog read behavior from exercise administration.
- Provide clear dependencies for future implementation changes.

**Non-Goals:**

- No OAuth or external identity provider.
- No multi-tenant organization model.
- No fine-grained ABAC policy engine.
- No final frontend design.
- No code implementation.

## Decisions

### Start With Local Accounts

The MVP will plan for local application user accounts represented by stable
UUIDs.

Alternative considered: start with OAuth/SSO. That adds provider selection,
callback handling and account linking before the core product needs it.

### Use Two Initial Roles

The first roles are `ADMIN` and `ATHLETE`.

`ADMIN` can manage users, roles and exercise administration. `ATHLETE` can use
normal workout features but cannot manage catalog or users.

Alternative considered: define many granular roles immediately. The MVP only
needs the distinction between administration and normal usage.

### Use Permissions Behind Roles

Even with two initial roles, implementation should check permissions rather
than scatter role-name checks through domain code. Roles grant permissions;
protected actions require permissions.

Alternative considered: hard-code `ADMIN` checks everywhere. That is fast but
creates friction when permissions expand.

### Treat Exercise Administration Separately From Exercise Read API

Exercise read behavior can support workout-template building and player flows.
Creating, editing and deactivating exercises belongs to admin exercise
management and requires authorization.

Alternative considered: include write endpoints in the first exercise-library
implementation. That would force permission decisions into the exercise module
before the access foundation is ready.

## Risks / Trade-offs

- Planning auth before domain modules delays visible workout features -> It
  reduces rework in API, ownership and admin behavior.
- Local accounts may need migration if external auth is added later -> Keep
  stable user UUIDs separate from credential details.
- Role-based authorization can become coarse -> Use permissions behind roles so
  future refinement is possible.
- Admin UI requirements may expand quickly -> Keep this planning focused on
  MVP user and exercise administration only.

## Open Questions

- Should the first implementation use cookie sessions, bearer tokens or another
  Spring Security-supported approach?
- Should the first admin user be seeded, created by command, or created through
  a protected bootstrap flow?
- Should normal `ATHLETE` users ever create private custom exercises, or is
  exercise creation admin-only for the MVP?
