// Exercise adapter — mock implementation.
// All functions return Promises so switching to a real API is a drop-in change.
// Private exercises are persisted in localStorage under STORAGE_KEY.

import { MOCK_GLOBAL_EXERCISES } from '../mock/exercises';
import type {
  Exercise,
  ExerciseScope,
  MovementPattern,
  BodyArea,
  EquipmentType,
  CreatePrivateExerciseInput,
  UpdatePrivateExerciseInput,
} from '../types';

const STORAGE_KEY = 'phoenix_private_exercises';

function randomUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function loadPrivateExercises(): Exercise[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Exercise[]) : [];
  } catch {
    return [];
  }
}

function savePrivateExercises(exercises: Exercise[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises));
}

// In-memory admin-created global exercises (session only)
const sessionGlobalExtras: Exercise[] = [];

export type ExerciseFilters = {
  active?: boolean;
  scope?: ExerciseScope;
  movementPattern?: MovementPattern;
  bodyArea?: BodyArea;
  equipmentType?: EquipmentType;
  search?: string;
  /** Pass the current user's ID to include their private exercises */
  userId?: string;
};

// ─── Read ────────────────────────────────────────────────────────────────────

export async function listExercises(filters: ExerciseFilters = {}): Promise<Exercise[]> {
  const { scope, movementPattern, bodyArea, equipmentType, search, userId } = filters;
  const active = filters.active ?? true;

  const privateExercises = userId
    ? loadPrivateExercises().filter((e) => e.ownerUserId === userId)
    : [];

  let exercises = [...MOCK_GLOBAL_EXERCISES, ...sessionGlobalExtras, ...privateExercises];

  exercises = exercises.filter((e) => e.active === active);

  if (scope) exercises = exercises.filter((e) => e.scope === scope);
  if (movementPattern) exercises = exercises.filter((e) => e.movementPattern === movementPattern);
  if (bodyArea) exercises = exercises.filter((e) => e.bodyArea === bodyArea);
  if (equipmentType) exercises = exercises.filter((e) => e.equipmentType === equipmentType);
  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    exercises = exercises.filter(
      (e) => e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q),
    );
  }

  return exercises;
}

export async function listAllExercisesIncludingInactive(
  filters: Omit<ExerciseFilters, 'active'> & { userId?: string } = {},
): Promise<Exercise[]> {
  const { scope, movementPattern, bodyArea, equipmentType, search, userId } = filters;

  const privateExercises = userId
    ? loadPrivateExercises().filter((e) => e.ownerUserId === userId)
    : [];

  let exercises = [...MOCK_GLOBAL_EXERCISES, ...sessionGlobalExtras, ...privateExercises];

  if (scope) exercises = exercises.filter((e) => e.scope === scope);
  if (movementPattern) exercises = exercises.filter((e) => e.movementPattern === movementPattern);
  if (bodyArea) exercises = exercises.filter((e) => e.bodyArea === bodyArea);
  if (equipmentType) exercises = exercises.filter((e) => e.equipmentType === equipmentType);
  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    exercises = exercises.filter(
      (e) => e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q),
    );
  }

  return exercises;
}

export async function getExercise(id: string, userId?: string): Promise<Exercise | null> {
  const global =
    MOCK_GLOBAL_EXERCISES.find((e) => e.id === id) ??
    sessionGlobalExtras.find((e) => e.id === id) ??
    null;
  if (global) return global;

  if (userId) {
    const priv = loadPrivateExercises().find((e) => e.id === id && e.ownerUserId === userId);
    return priv ?? null;
  }

  return null;
}

// ─── Athlete: private exercise write ────────────────────────────────────────

export async function createPrivateExercise(
  input: CreatePrivateExerciseInput,
  userId: string,
): Promise<Exercise> {
  const exercise: Exercise = {
    id: randomUUID(),
    scope: 'USER',
    ownerUserId: userId,
    name: input.name.trim(),
    namePt: input.namePt?.trim() || input.name.trim(),
    movementPattern: input.movementPattern,
    bodyArea: input.bodyArea,
    equipmentType: input.equipmentType,
    defaultSafetyNotes: input.defaultSafetyNotes?.trim() || null,
    active: true,
  };

  const existing = loadPrivateExercises();
  savePrivateExercises([...existing, exercise]);
  return exercise;
}

export async function updatePrivateExercise(
  id: string,
  input: UpdatePrivateExerciseInput,
  userId: string,
): Promise<Exercise> {
  const exercises = loadPrivateExercises();
  const idx = exercises.findIndex((e) => e.id === id && e.ownerUserId === userId);
  if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');

  const prev = exercises[idx];
  const updated: Exercise = {
    ...prev,
    ...(input.name !== undefined ? { name: input.name.trim() } : {}),
    ...(input.namePt !== undefined
      ? { namePt: input.namePt.trim() || input.name?.trim() || prev.name }
      : {}),
    ...(input.movementPattern !== undefined ? { movementPattern: input.movementPattern } : {}),
    ...(input.bodyArea !== undefined ? { bodyArea: input.bodyArea } : {}),
    ...(input.equipmentType !== undefined ? { equipmentType: input.equipmentType } : {}),
    ...(input.defaultSafetyNotes !== undefined
      ? { defaultSafetyNotes: input.defaultSafetyNotes.trim() || null }
      : {}),
  };

  exercises[idx] = updated;
  savePrivateExercises(exercises);
  return updated;
}

export async function deactivatePrivateExercise(id: string, userId: string): Promise<Exercise> {
  const exercises = loadPrivateExercises();
  const idx = exercises.findIndex((e) => e.id === id && e.ownerUserId === userId);
  if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');
  exercises[idx] = { ...exercises[idx], active: false };
  savePrivateExercises(exercises);
  return exercises[idx];
}

export async function reactivatePrivateExercise(id: string, userId: string): Promise<Exercise> {
  const exercises = loadPrivateExercises();
  const idx = exercises.findIndex((e) => e.id === id && e.ownerUserId === userId);
  if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');
  exercises[idx] = { ...exercises[idx], active: true };
  savePrivateExercises(exercises);
  return exercises[idx];
}

// ─── Admin: global exercise write (session memory only) ─────────────────────

export async function adminCreateGlobalExercise(
  input: CreatePrivateExerciseInput,
): Promise<Exercise> {
  const exercise: Exercise = {
    id: randomUUID(),
    scope: 'GLOBAL',
    ownerUserId: null,
    name: input.name.trim(),
    namePt: input.namePt?.trim() || input.name.trim(),
    movementPattern: input.movementPattern,
    bodyArea: input.bodyArea,
    equipmentType: input.equipmentType,
    defaultSafetyNotes: input.defaultSafetyNotes?.trim() || null,
    active: true,
  };
  sessionGlobalExtras.push(exercise);
  return exercise;
}

export async function adminUpdateGlobalExercise(
  id: string,
  input: UpdatePrivateExerciseInput,
): Promise<Exercise> {
  // Session-created exercises live in sessionGlobalExtras
  const idx = sessionGlobalExtras.findIndex((e) => e.id === id);
  if (idx !== -1) {
    const prev = sessionGlobalExtras[idx];
    const updated: Exercise = {
      ...prev,
      ...(input.name !== undefined ? { name: input.name.trim() } : {}),
      ...(input.namePt !== undefined ? { namePt: input.namePt.trim() || input.name?.trim() || prev.name } : {}),
      ...(input.movementPattern !== undefined ? { movementPattern: input.movementPattern } : {}),
      ...(input.bodyArea !== undefined ? { bodyArea: input.bodyArea } : {}),
      ...(input.equipmentType !== undefined ? { equipmentType: input.equipmentType } : {}),
      ...(input.defaultSafetyNotes !== undefined ? { defaultSafetyNotes: input.defaultSafetyNotes.trim() || null } : {}),
    };
    sessionGlobalExtras[idx] = updated;
    return updated;
  }
  // Seed exercises are read-only at runtime — in a real backend this would be a PATCH call
  throw new Error('Exercícios do catálogo inicial não podem ser editados neste protótipo (sem backend). Exercícios criados nesta sessão podem ser editados.');
}

export async function adminDeactivateGlobalExercise(id: string): Promise<Exercise> {
  const idx = sessionGlobalExtras.findIndex((e) => e.id === id);
  if (idx !== -1) {
    sessionGlobalExtras[idx] = { ...sessionGlobalExtras[idx], active: false };
    return sessionGlobalExtras[idx];
  }
  throw new Error('Exercícios do catálogo inicial não podem ser desativados neste protótipo (sem backend).');
}

export async function adminReactivateGlobalExercise(id: string): Promise<Exercise> {
  const idx = sessionGlobalExtras.findIndex((e) => e.id === id);
  if (idx !== -1) {
    sessionGlobalExtras[idx] = { ...sessionGlobalExtras[idx], active: true };
    return sessionGlobalExtras[idx];
  }
  throw new Error('Exercícios do catálogo inicial não podem ser reativados neste protótipo (sem backend).');
}

export async function listAdminExercises(filters: Omit<ExerciseFilters, 'userId'> = {}): Promise<Exercise[]> {
  const { scope, movementPattern, bodyArea, equipmentType, search } = filters;
  const active = filters.active ?? true;

  let exercises = [...MOCK_GLOBAL_EXERCISES, ...sessionGlobalExtras];
  exercises = exercises.filter((e) => e.active === active);

  if (scope) exercises = exercises.filter((e) => e.scope === scope);
  if (movementPattern) exercises = exercises.filter((e) => e.movementPattern === movementPattern);
  if (bodyArea) exercises = exercises.filter((e) => e.bodyArea === bodyArea);
  if (equipmentType) exercises = exercises.filter((e) => e.equipmentType === equipmentType);
  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    exercises = exercises.filter(
      (e) => e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q),
    );
  }

  return exercises;
}
