# Phoenix

**Life as Code.**

Phoenix is a personal operating system for health, training, nutrition, data, automation and decision-making.

It is not just a workout tracker.

Phoenix connects what is currently scattered across multiple tools:

- Strong for workout execution
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

> Be ready to train tomorrow using Strong, with Phoenix documentation as the source of truth.

For now:

- **Markdown docs** define the program.
- **Strong** executes the templates.
- **Phoenix Infra** hosts future apps and services.
- **Phoenix App** will later automate analysis, dashboards and integrations.

---

## Repository structure

```text
phoenix/
├── docs/
│   ├── 00-vision.md
│   ├── 01-roadmap.md
│   ├── 02-architecture.md
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

The Phoenix documentation is the source of truth.

Apps are clients.

Strong is currently the workout client.

Later, Phoenix may sync to Strong, read Strong exports, analyze workouts and suggest progression.

---

## Current modules

### Training

- 5 days/week strength training
- daily Zone 2 cardio
- lumbar-safe and shoulder-aware exercise selection
- Strong-ready templates
- sticky notes in Portuguese
- progression rules

See: [`docs/training/README.md`](docs/training/README.md)

### Health

- body composition
- medications
- supplements
- bioimpedance
- weight and measurements

See: [`docs/health/README.md`](docs/health/README.md)

### Nutrition

Nutrition is guided by Marcia.

Phoenix documents principles, substitutions, grocery lists and execution notes without replacing professional nutrition guidance.

See: [`docs/nutrition/README.md`](docs/nutrition/README.md)

---

## Infrastructure

Infrastructure lives in a separate repository:

```text
felipeaffonso/phoenix-infra
```

This repository is for the product, knowledge base and future application code.

---

## Philosophy

- Knowledge as Code
- Health as Data
- Training as System
- Progress as Feedback
- Life as Code
