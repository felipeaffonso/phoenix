# PHOENIX CONSTITUTION

Version: 1.0
Status: Draft

## Purpose

Phoenix is a Personal Operating System focused on training, health and long-term performance.

This document is the highest authority of the project.

Hierarchy:

1. PHOENIX_CONSTITUTION.md
2. ADRs
3. Blueprint
4. Code

## Mission

Build a production-quality application capable of replacing Strong as the primary workout application.

## MVP

The MVP includes only:

- Authentication
- User profiles
- Exercise library
- Workout templates
- Workout player
- Workout history
- Progression engine

Anything else belongs to the Product Backlog.

## Repositories

phoenix-infra: infrastructure only.

phoenix: product only.

Business logic must never be placed in phoenix-infra.

## Architecture

- Modular Monolith
- Java 25 LTS
- Spring Boot 4.x
- Spring Modulith
- Spring Data JDBC
- PostgreSQL
- Redis
- Next.js
- PWA

## Engineering Principles

- Documentation First
- Security First
- Simplicity First
- Single Source of Truth
- Long-term Maintainability

## AI Rules

Any AI working on this repository must:

- Read this document first.
- Never change architecture without an ADR.
- Never expand MVP scope.
- Never replace official technologies.
- Update documentation together with implementation.

## Workflow

Product → UX → Documentation → Architecture → Code → Tests → Review → Deploy

This order must not be inverted.
