## 1. Authentication Planning

- [ ] 1.1 Decide and document the MVP session or token strategy.
- [ ] 1.2 Define protected and public endpoint categories.
- [ ] 1.3 Define sign-in and sign-out behavior.
- [ ] 1.4 Define password hashing and credential validation behavior.

## 2. User Profile Planning

- [ ] 2.1 Define user table and profile table boundaries.
- [ ] 2.2 Define required profile fields and constraints.
- [ ] 2.3 Define administrative user creation flow.
- [ ] 2.4 Define user deactivation behavior.

## 3. Authorization Planning

- [ ] 3.1 Define MVP roles `ADMIN` and `ATHLETE`.
- [ ] 3.2 Define permission names granted by each role.
- [ ] 3.3 Define where authorization checks live in backend code.
- [ ] 3.4 Define authorization test strategy.

## 4. Admin Exercise Management Planning

- [ ] 4.1 Define exercise admin API surface.
- [ ] 4.2 Define exercise admin frontend surface at product level.
- [ ] 4.3 Define create, edit and deactivate behavior.
- [ ] 4.4 Define how exercise admin behavior relates to read-only exercise API.

## 5. Validation

- [ ] 5.1 Run `openspec validate define-identity-access-foundation`.
- [ ] 5.2 Run `openspec validate --specs`.
- [ ] 5.3 Update MVP workflow status documentation.
- [ ] 5.4 Decide whether `implement-exercise-library` can proceed as read-only
      after this planning is accepted.
