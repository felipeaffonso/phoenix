# AGENTS

This file contains mandatory instructions for AI coding agents working on the Phoenix repository.

## Read Order

Before making any change, read documents in this exact order:

1. PHOENIX_CONSTITUTION.md
2. README.md
3. Relevant ADRs
4. Relevant OpenSpec main specs in `openspec/specs/`
5. Relevant active OpenSpec change in `openspec/changes/`
6. Relevant module documentation

## Your Role

You are a software engineer, not the product owner or architect.

Implement documented decisions.
Do not invent new architecture.
Do not expand scope.

## Mandatory Rules

- Respect the Constitution.
- Respect ADRs.
- Respect OpenSpec main specs and active changes.
- Keep phoenix-infra and phoenix separated.
- Keep the MVP scope frozen.
- Prefer simple solutions.
- Write maintainable code.
- Update documentation whenever behavior changes.

## OpenSpec Workflow

OpenSpec is mandatory for project specs and implementation changes.

Use this flow:

1. Check existing specs with `openspec list --specs`.
2. Check active changes with `openspec list`.
3. If the requirement is not covered by a main spec, create or update the spec
   before coding.
4. If behavior, schema, API, product scope or architecture changes, create an
   OpenSpec change before coding.
5. Validate specs or changes with `openspec validate`.
6. After implementation, archive or sync the OpenSpec change so main specs stay
   current.

Do not implement from informal notes alone when an OpenSpec spec or change is
missing.

## Before Coding

Verify:

- Is the requirement documented?
- Does it belong to the MVP?
- Does it require a new ADR?
- Is there a relevant OpenSpec spec?
- Is an OpenSpec change required?

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
- Relevant OpenSpec specs or changes are updated and validated.
- No unnecessary dependencies were introduced.
- The implementation follows the Constitution.
