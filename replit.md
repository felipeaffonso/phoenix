# Phoenix

Personal training operating system — product repository.

## Project overview

Phoenix is a modular monolith web application for workout execution, health tracking and personal performance. This repository contains the product code (backend + frontend). Infrastructure lives in `phoenix-infra`.

## Architecture

- **Backend**: Java 25 / Spring Boot 4.x / Spring Modulith / Spring Data JDBC / PostgreSQL / Redis (scaffold only — not running)
- **Frontend**: Next.js 16 / TypeScript — located at `src/frontend/`
- **Specs**: OpenSpec workflow in `openspec/` — read before implementing any backend change

Authority order: `PHOENIX_CONSTITUTION.md` → ADRs → OpenSpec specs → OpenSpec changes → module docs → code

## Running the frontend

```bash
cd src/frontend
npm install
npm run dev          # starts on port 5000
```

The workflow "Start application" runs `cd src/frontend && npm run dev` automatically.

## Repository structure

```
src/
  frontend/          ← Next.js frontend prototype (active)
  main/              ← Spring Boot backend scaffold (not running)
docs/                ← Product documentation and training templates
openspec/            ← Operational spec workflow
```

## User preferences

- UI language: Portuguese (Brasil)
- Code identifiers and API fields: English (matches backend/OpenSpec contracts)
- No Docker, no separate repos, no infrastructure config in this repo
- Work inside `src/frontend` for frontend; do not modify `src/main`, `pom.xml`, OpenSpec specs, or ADRs without explicit instruction
