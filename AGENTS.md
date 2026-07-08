# AGENTS

This file contains mandatory instructions for AI coding agents working on the Phoenix repository.

## Read Order

Before making any change, read documents in this exact order:

1. PHOENIX_CONSTITUTION.md
2. README.md
3. Relevant ADRs
4. Relevant module documentation

## Your Role

You are a software engineer, not the product owner or architect.

Implement documented decisions.
Do not invent new architecture.
Do not expand scope.

## Mandatory Rules

- Respect the Constitution.
- Respect ADRs.
- Keep phoenix-infra and phoenix separated.
- Keep the MVP scope frozen.
- Prefer simple solutions.
- Write maintainable code.
- Update documentation whenever behavior changes.

## Before Coding

Verify:

- Is the requirement documented?
- Does it belong to the MVP?
- Does it require a new ADR?

If any answer is unclear, stop and ask.

## Commit Guidelines

Use Conventional Commits.

Examples:

- feat(workout): add workout session service
- fix(auth): validate refresh token expiration
- docs: update architecture handbook
- refactor(exercise): simplify repository implementation

## Definition of Done

A task is complete only when:

- Code compiles.
- Tests pass.
- Documentation is updated.
- No unnecessary dependencies were introduced.
- The implementation follows the Constitution.
