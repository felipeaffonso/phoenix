// Portuguese display labels for enum values.
// Keep these separate from types so backend contracts stay in English.

import type { MovementPattern, BodyArea, EquipmentType, ExerciseScope } from './types';

export const movementPatternLabel: Record<MovementPattern, string> = {
  HORIZONTAL_PUSH: 'Empurrar Horizontal',
  INCLINE_PUSH: 'Empurrar Inclinado',
  VERTICAL_PUSH: 'Empurrar Vertical',
  HORIZONTAL_PULL: 'Puxar Horizontal',
  VERTICAL_PULL: 'Puxar Vertical',
  CHEST_FLY: 'Fly de Peito',
  SHOULDER_ABDUCTION: 'Abdução de Ombro',
  REAR_DELT_FLY: 'Fly Posterior',
  ELBOW_FLEXION: 'Flexão de Cotovelo',
  ELBOW_EXTENSION: 'Extensão de Cotovelo',
  KNEE_EXTENSION: 'Extensão de Joelho',
  KNEE_FLEXION: 'Flexão de Joelho',
  HIP_EXTENSION: 'Extensão de Quadril',
  HIP_ABDUCTION: 'Abdução de Quadril',
  UNILATERAL_SQUAT: 'Agachamento Unilateral',
  CALF_RAISE: 'Panturrilha',
  TRUNK_FLEXION: 'Flexão de Tronco',
  ANTI_EXTENSION_CORE: 'Core Anti-Extensão',
  ZONE_2_CARDIO: 'Cardio Zona 2',
  MOBILITY: 'Mobilidade',
};

export const bodyAreaLabel: Record<BodyArea, string> = {
  CHEST: 'Peito',
  UPPER_CHEST: 'Peito Superior',
  BACK: 'Costas',
  LATS: 'Latíssimo',
  SHOULDERS: 'Ombros',
  LATERAL_DELTS: 'Deltoide Lateral',
  REAR_DELTS: 'Deltoide Posterior',
  TRICEPS: 'Tríceps',
  BICEPS: 'Bíceps',
  QUADS: 'Quadríceps',
  HAMSTRINGS: 'Posterior de Coxa',
  GLUTES: 'Glúteos',
  GLUTE_MEDIUS: 'Glúteo Médio',
  CALVES: 'Panturrilha',
  ABS: 'Abdômen',
  CORE: 'Core',
  CARDIO: 'Cardio',
  MOBILITY: 'Mobilidade',
};

export const equipmentTypeLabel: Record<EquipmentType, string> = {
  MACHINE: 'Máquina',
  CABLE: 'Cabo / Polia',
  DUMBBELL: 'Halter',
  BODYWEIGHT: 'Peso Corporal',
  SMITH_MACHINE: 'Smith',
  CARDIO_MACHINE: 'Cardio',
  MIXED: 'Misto',
};

export const scopeLabel: Record<ExerciseScope, string> = {
  GLOBAL: 'Global',
  USER: 'Privado',
};
