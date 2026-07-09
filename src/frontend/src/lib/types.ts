// ─── Core exercise types ────────────────────────────────────────────────────
// These match the backend/OpenSpec contract exactly.
// UI labels live in lib/labels.ts; code identifiers stay in English.

export type ExerciseScope = 'GLOBAL' | 'USER';

export type MovementPattern =
  | 'HORIZONTAL_PUSH'
  | 'INCLINE_PUSH'
  | 'VERTICAL_PUSH'
  | 'HORIZONTAL_PULL'
  | 'VERTICAL_PULL'
  | 'CHEST_FLY'
  | 'SHOULDER_ABDUCTION'
  | 'REAR_DELT_FLY'
  | 'ELBOW_FLEXION'
  | 'ELBOW_EXTENSION'
  | 'KNEE_EXTENSION'
  | 'KNEE_FLEXION'
  | 'HIP_EXTENSION'
  | 'HIP_ABDUCTION'
  | 'UNILATERAL_SQUAT'
  | 'CALF_RAISE'
  | 'TRUNK_FLEXION'
  | 'ANTI_EXTENSION_CORE'
  | 'ZONE_2_CARDIO'
  | 'MOBILITY';

export type BodyArea =
  | 'CHEST'
  | 'UPPER_CHEST'
  | 'BACK'
  | 'LATS'
  | 'SHOULDERS'
  | 'LATERAL_DELTS'
  | 'REAR_DELTS'
  | 'TRICEPS'
  | 'BICEPS'
  | 'QUADS'
  | 'HAMSTRINGS'
  | 'GLUTES'
  | 'GLUTE_MEDIUS'
  | 'CALVES'
  | 'ABS'
  | 'CORE'
  | 'CARDIO'
  | 'MOBILITY';

export type EquipmentType =
  | 'MACHINE'
  | 'CABLE'
  | 'DUMBBELL'
  | 'BODYWEIGHT'
  | 'SMITH_MACHINE'
  | 'CARDIO_MACHINE'
  | 'MIXED';

export type Exercise = {
  id: string;
  scope: ExerciseScope;
  ownerUserId: string | null;
  name: string;
  namePt: string;
  movementPattern: MovementPattern;
  bodyArea: BodyArea;
  equipmentType: EquipmentType;
  defaultSafetyNotes: string | null;
  active: boolean;
};

// ─── Private exercise creation input ────────────────────────────────────────

export type CreatePrivateExerciseInput = {
  name: string;
  namePt?: string;
  movementPattern: MovementPattern;
  bodyArea: BodyArea;
  equipmentType: EquipmentType;
  defaultSafetyNotes?: string;
};

export type UpdatePrivateExerciseInput = Partial<CreatePrivateExerciseInput>;

// ─── Auth / user ────────────────────────────────────────────────────────────

export type AppRole = 'ATHLETE' | 'ADMIN';

export type MockUser = {
  id: string;
  displayName: string;
  email: string;
  role: AppRole;
};

// ─── Workout templates ───────────────────────────────────────────────────────

export type GroupType = 'SINGLE' | 'SUPERSET' | 'BI_SET' | 'TRI_SET' | 'CIRCUIT';
export type TargetType = 'REPS' | 'TIME_SECONDS' | 'FAILURE';
export type IntensityMetric = 'NONE' | 'RPE' | 'RIR';
export type SeriesType = 'NORMAL' | 'DROP_SET' | 'REST_PAUSE';

export type PrescribedSeries = {
  seriesOrder: number;
  seriesType: SeriesType;
  targetType: TargetType;
  targetValue: number | null;
  intensityMetric: IntensityMetric;
  intensityValue: number | null;
  suggestedLoadKg: number | null;
  restSeconds: number;
};

export type TemplateExercise = {
  groupPosition: number;
  exercisePosition: number;
  groupType: GroupType;
  exerciseId: string;
  exerciseName: string;
  exerciseNamePt: string;
  executionNote: string;
  series: PrescribedSeries[];
};

export type WorkoutTemplate = {
  id: string;
  name: string;
  dayLabel: string;
  focus: string;
  active: boolean;
  exercises: TemplateExercise[];
};
