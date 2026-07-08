# ADR 0002: Use Spring Security for Application Security

Status: Accepted

Date: 2026-07-08

## Context

Phoenix needs authentication and authorization as part of the frozen MVP scope.
The accepted backend architecture is Spring Boot 4.x, and the current backend
scaffold already includes Spring Security dependencies generated with the
project.

Authentication, authorization, protected endpoints and role checks are
cross-cutting application concerns. They should use the standard security
framework for the selected Spring stack instead of a custom security layer.

## Decision

Phoenix will use Spring Security for application authentication and
authorization.

The first implementation will stay within local application accounts unless a
future documented decision adds an external identity provider.

Role and permission enforcement will be implemented through Spring
Security-compatible mechanisms while keeping domain modules free from scattered
role-name checks.

## Consequences

- Authentication and authorization implementation work must align with Spring
  Security.
- Custom authentication or authorization frameworks require a new ADR before
  implementation.
- OAuth, SSO, social login or an external identity provider remain out of
  scope until a future OpenSpec change and, if architectural impact requires
  it, a new ADR.
- Tests for protected behavior should use Spring Security test support where
  appropriate.
