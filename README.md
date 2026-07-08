# Phoenix

**Life as Code.**

Phoenix is a personal operating system for health, training, nutrition, data, automation and decision-making.

It is not just a workout tracker.

Phoenix's long-term vision is to connect what is currently scattered across
multiple tools:

- Phoenix Web App for workout execution
- Apple Health / wearable data for biometrics
- nutrition guidance from Marcia
- body composition reports
- medications and supplements
- cardio logs
- photos and measurements
- weekly check-ins
- AI-assisted analysis

The goal is to create one reliable source of truth for long-term physical transformation and personal optimization.

---

## Current focus

The immediate priority is practical:

> Define the training system so the Phoenix Web App can become the center of
> workout execution.

For now:

- **Markdown docs** define the program.
- **Phoenix Web App** is the primary product experience.
- **Phoenix Infra** hosts infrastructure only.
- **Phoenix App** will own product code and business logic.

The MVP scope is frozen by `PHOENIX_CONSTITUTION.md` and includes only
authentication, user profiles, exercise library, workout templates, workout
player, workout history and progression engine.

---

## Repository structure

```text
phoenix/
├── docs/
│   ├── 00-vision.md
│   ├── 02-architecture.md
│   ├── adr/
│   ├── mvp/
│   ├── health/
│   ├── nutrition/
│   └── training/
├── src/
│   ├── backend/
│   └── frontend/
├── assets/
├── README.md
└── ROADMAP.md
```

---

## Key principle

The Phoenix documentation and OpenSpec specs are the source of truth.

Authority order:

1. `PHOENIX_CONSTITUTION.md`
2. ADRs in `docs/adr/`
3. OpenSpec main specs in `openspec/specs/`
4. Active OpenSpec changes in `openspec/changes/`
5. Module documentation in `docs/`
6. Code

The Phoenix Web App is the primary client.

External tools may inspire workflows, but they are not part of the core
execution loop.

MVP product docs live in [`docs/mvp/`](docs/mvp/).

OpenSpec specs live in [`openspec/specs/`](openspec/specs/).

---

## Current modules

### Training

- 5 days/week strength training
- daily Zone 2 cardio
- lumbar-safe and shoulder-aware exercise selection
- Web-App-ready workout templates
- execution notes in Portuguese
- progression rules

See: [`docs/training/README.md`](docs/training/README.md)

### Health

Health is a product backlog domain after the MVP.

- body composition
- medications
- supplements
- bioimpedance
- weight and measurements

See: [`docs/health/README.md`](docs/health/README.md)

### Nutrition

Nutrition is guided by Marcia.

Phoenix documents principles, substitutions, grocery lists and execution notes without replacing professional nutrition guidance.

Nutrition is a product backlog domain after the MVP.

See: [`docs/nutrition/README.md`](docs/nutrition/README.md)

---

## Infrastructure

Infrastructure lives in a separate repository:

```text
felipeaffonso/phoenix-infra
```

This repository is for the product, knowledge base and future application code.

---

## Development

The backend scaffold is a Java 25 / Spring Boot 4.x Maven application.

Before implementing a behavior, schema, API, product-scope or architecture
change:

```bash
openspec list --specs
openspec list
openspec validate
```

Create an OpenSpec change for implementation work that changes behavior:

```bash
openspec new change <change-name>
```

Run backend tests with:

```bash
mvn test
```

---

## Philosophy

- Knowledge as Code
- Health as Data
- Training as System
- Progress as Feedback
- Life as Code
