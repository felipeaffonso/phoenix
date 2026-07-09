module.exports = [
"[project]/src/lib/mock/templates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Workout template mock data derived from docs/training/TEMPLATE-*.md
// This is a visual prototype — real backend schemas will replace this later.
__turbopack_context__.s([
    "MOCK_TEMPLATES",
    ()=>MOCK_TEMPLATES
]);
const MOCK_TEMPLATES = [
    {
        id: 'tpl-cardio-monday',
        name: 'Cardio',
        dayLabel: 'Segunda',
        focus: 'Zona 2 em jejum',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a5b6c7d8-e9f0-1234-abcd-345678901234',
                exerciseName: 'Elliptical / Transport',
                exerciseNamePt: 'Transport / Elíptico',
                executionNote: '🎯 Cardio Zona 2\n\n35–45 minutos\nFC alvo: 120–135 bpm\n\nRitmo sustentável. Sem impacto.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 2400,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 0
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-upper-a-tuesday',
        name: 'Upper A',
        dayLabel: 'Terça',
        focus: 'Peito, costas, deltoide lateral e tríceps',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: '7f2b5a5e-1c2d-4d0f-8c71-6c3fdc85b2ab',
                exerciseName: 'Chest Press (Machine)',
                exerciseNamePt: 'Supino na máquina / Chest press',
                executionNote: '🎯 Meta: 8–12 reps\n\nPare em RIR 2.\nÚltima série: RIR 1 se estiver sem dor no ombro.\n\nProgressão: 12/12/12 → +2,5 a +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                exerciseName: 'Seated Row (Cable)',
                exerciseNamePt: 'Remada sentada no cabo',
                executionNote: '🎯 Meta: 10–12 reps\n\nPare em RIR 2.\n\nProgressão: 12/12/12 → +2,5 a +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 3,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
                exerciseName: 'Incline Chest Press (Machine)',
                exerciseNamePt: 'Supino inclinado na máquina',
                executionNote: '🎯 Meta: 8–12 reps\n\nPare em RIR 2.\n\nProgressão: 12/12/12 → +2,5 a +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 4,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
                exerciseName: 'Lat Pulldown (Cable)',
                exerciseNamePt: 'Puxada alta aberta',
                executionNote: '🎯 Meta: 10–12 reps\n\nPare em RIR 2.\n\nProgressão: 12/12/12 → +2,5 a +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 5,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd4e5f6a7-b8c9-0123-defa-234567890123',
                exerciseName: 'Lateral Raise (Machine)',
                exerciseNamePt: 'Elevação lateral na máquina',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.\n\nProgressão: 15/15/15 → +1 a +2,5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 6,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'e5f6a7b8-c9d0-1234-efab-345678901234',
                exerciseName: 'Triceps Pushdown (Cable - Straight Bar)',
                exerciseNamePt: 'Tríceps polia barra reta',
                executionNote: '🎯 Meta: 10–15 reps\n\nPare em RIR 1–2.\n\nProgressão: 15/15/15 → +1 a +2,5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-lower-a-wednesday',
        name: 'Lower A',
        dayLabel: 'Quarta',
        focus: 'Membros inferiores — lumbar-safe',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'f6a7b8c9-d0e1-2345-fabc-456789012345',
                exerciseName: 'Leg Extension (Machine)',
                exerciseNamePt: 'Cadeira extensora',
                executionNote: '🎯 Meta: 10–15 reps\n\nRIR 2, última série RIR 1.\n\nProgressão: 15/15/15/15 → +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a7b8c9d0-e1f2-3456-abcd-567890123456',
                exerciseName: 'Seated Leg Curl',
                exerciseNamePt: 'Mesa flexora sentada',
                executionNote: '🎯 Meta: 10–15 reps\n\nRIR 2, última série RIR 1.\n\nProgressão: 15/15/15/15 → +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 3,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b8c9d0e1-f2a3-4567-bcde-678901234567',
                exerciseName: 'Hip Thrust (Machine or Smith)',
                exerciseNamePt: 'Elevação pélvica / Hip Thrust',
                executionNote: '🎯 Meta: 10–15 reps\n\nRIR 2, última série RIR 1.\n\nProgressão: 15/15/15/15 → +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 4,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'c9d0e1f2-a3b4-5678-cdef-789012345678',
                exerciseName: 'Bulgarian Split Squat',
                exerciseNamePt: 'Afundo búlgaro',
                executionNote: '🎯 Meta: 10–15 reps por perna\n\nRIR 2, última série RIR 1.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 5,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd0e1f2a3-b4c5-6789-defa-890123456789',
                exerciseName: 'Standing Calf Raise',
                exerciseNamePt: 'Panturrilha em pé',
                executionNote: '🎯 Meta: 12–20 reps\n\nPode chegar próximo da falha.\n\nProgressão: 20/20/20/20 → +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    }
                ]
            },
            {
                groupPosition: 6,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'e1f2a3b4-c5d6-7890-efab-901234567890',
                exerciseName: 'Cable Crunch',
                exerciseNamePt: 'Abdominal no cabo',
                executionNote: '🎯 Meta: 12–20 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 45
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-recovery-thursday',
        name: 'Recovery + Cardio',
        dayLabel: 'Quinta',
        focus: 'Zona 2 e mobilidade leve',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a5b6c7d8-e9f0-1234-abcd-345678901234',
                exerciseName: 'Elliptical / Transport',
                exerciseNamePt: 'Transport / Elíptico',
                executionNote: '🎯 Cardio Zona 2\n\n35–45 minutos\nFC alvo: 120–135 bpm\n\nRitmo sustentável. Sem impacto.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 2400,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 0
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b6c7d8e9-f0a1-2345-bcde-456789012345',
                exerciseName: 'Mobility',
                exerciseNamePt: 'Mobilidade leve',
                executionNote: '🎯 Mobilidade leve\n\n10 minutos\nFoco: quadril, torácica, ombro.\n\nSem torção lombar forçada.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 600,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 0
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-upper-b-friday',
        name: 'Upper B',
        dayLabel: 'Sexta',
        focus: 'Costas, peito, deltoide posterior e bíceps',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'f2a3b4c5-d6e7-8901-fabc-012345678901',
                exerciseName: 'Iso-Lateral Row (Machine)',
                exerciseNamePt: 'Remada iso-lateral máquina',
                executionNote: '🎯 Meta: 8–12 reps\n\nPare em RIR 2.\n\nProgressão: 12/12/12 → +2,5 a +5 kg',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
                exerciseName: 'Incline Chest Press (Machine)',
                exerciseNamePt: 'Supino inclinado máquina',
                executionNote: '🎯 Meta: 8–12 reps\n\nPare em RIR 2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 3,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a3b4c5d6-e7f8-9012-abcd-123456789012',
                exerciseName: 'Lat Pulldown - Underhand (Cable)',
                exerciseNamePt: 'Puxada alta pegada supinada',
                executionNote: '🎯 Meta: 10–12 reps\n\nPare em RIR 2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 4,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b4c5d6e7-f8a9-0123-bcde-234567890123',
                exerciseName: 'Cable Crossover',
                exerciseNamePt: 'Crucifixo / crossover no cabo',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 5,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'c5d6e7f8-a9b0-1234-cdef-345678901234',
                exerciseName: 'Reverse Fly (Machine)',
                exerciseNamePt: 'Crucifixo inverso máquina',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 6,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd6e7f8a9-b0c1-2345-defa-456789012345',
                exerciseName: 'Bicep Curl (Machine)',
                exerciseNamePt: 'Rosca bíceps máquina',
                executionNote: '🎯 Meta: 10–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-lower-b-saturday',
        name: 'Lower B',
        dayLabel: 'Sábado',
        focus: 'Cadeia posterior, glúteos, panturrilha e core',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'e7f8a9b0-c1d2-3456-efab-567890123456',
                exerciseName: 'Lying Leg Curl (Machine)',
                exerciseNamePt: 'Mesa flexora deitada',
                executionNote: '🎯 Meta: 10–15 reps\n\nRIR 2, última série RIR 1.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'f6a7b8c9-d0e1-2345-fabc-456789012345',
                exerciseName: 'Leg Extension (Machine)',
                exerciseNamePt: 'Cadeira extensora',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 75
                    }
                ]
            },
            {
                groupPosition: 3,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'f8a9b0c1-d2e3-4567-fabc-678901234567',
                exerciseName: 'Hip Abduction (Machine)',
                exerciseNamePt: 'Abdutora',
                executionNote: '🎯 Meta: 12–20 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 4,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'a9b0c1d2-e3f4-5678-abcd-789012345678',
                exerciseName: 'Glute Kickback (Machine)',
                exerciseNamePt: 'Coice glúteo máquina',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 5,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd0e1f2a3-b4c5-6789-defa-890123456789',
                exerciseName: 'Standing Calf Raise',
                exerciseNamePt: 'Panturrilha em pé',
                executionNote: '🎯 Meta: 12–20 reps',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 6,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'b0c1d2e3-f4a5-6789-bcde-890123456789',
                exerciseName: 'Plank',
                exerciseNamePt: 'Prancha',
                executionNote: '🎯 Meta: 20–40 s\n\nPare antes de perder a postura.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 20,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 20,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'TIME_SECONDS',
                        targetValue: 20,
                        intensityMetric: 'NONE',
                        intensityValue: null,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            }
        ]
    },
    {
        id: 'tpl-shoulders-arms-sunday',
        name: 'Shoulders + Arms',
        dayLabel: 'Domingo',
        focus: 'Deltoides, bíceps e tríceps — shoulder-safe',
        active: true,
        exercises: [
            {
                groupPosition: 1,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'c1d2e3f4-a5b6-7890-cdef-901234567890',
                exerciseName: 'Shoulder Press (Machine)',
                exerciseNamePt: 'Desenvolvimento máquina',
                executionNote: '🎯 Meta: 8–12 reps\n\nPare em RIR 2–3.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 3,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 8,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 90
                    }
                ]
            },
            {
                groupPosition: 2,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd4e5f6a7-b8c9-0123-defa-234567890123',
                exerciseName: 'Lateral Raise (Machine)',
                exerciseNamePt: 'Elevação lateral na máquina',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 4,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 3,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'c5d6e7f8-a9b0-1234-cdef-345678901234',
                exerciseName: 'Reverse Fly (Machine)',
                exerciseNamePt: 'Crucifixo inverso máquina',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 4,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'd2e3f4a5-b6c7-8901-defa-012345678901',
                exerciseName: 'Preacher Curl (Machine)',
                exerciseNamePt: 'Rosca Scott máquina',
                executionNote: '🎯 Meta: 10–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 5,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'e3f4a5b6-c7d8-9012-efab-123456789012',
                exerciseName: 'Hammer Curl (Dumbbell)',
                exerciseNamePt: 'Rosca martelo com halteres',
                executionNote: '🎯 Meta: 10–12 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 6,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'f4a5b6c7-d8e9-0123-fabc-234567890123',
                exerciseName: 'Triceps Extension (Cable)',
                exerciseNamePt: 'Extensão de tríceps no cabo',
                executionNote: '🎯 Meta: 10–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 3,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 10,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            },
            {
                groupPosition: 7,
                exercisePosition: 1,
                groupType: 'SINGLE',
                exerciseId: 'e5f6a7b8-c9d0-1234-efab-345678901234',
                exerciseName: 'Triceps Pushdown (Cable - Straight Bar)',
                exerciseNamePt: 'Tríceps polia barra reta',
                executionNote: '🎯 Meta: 12–15 reps\n\nPare em RIR 1–2.',
                series: [
                    {
                        seriesOrder: 1,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 2,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    },
                    {
                        seriesOrder: 2,
                        seriesType: 'NORMAL',
                        targetType: 'REPS',
                        targetValue: 12,
                        intensityMetric: 'RIR',
                        intensityValue: 1,
                        suggestedLoadKg: null,
                        restSeconds: 60
                    }
                ]
            }
        ]
    }
];
}),
"[project]/src/app/treinos/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TreinosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/templates.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function seriesSummary(series) {
    if (!series.length) return '';
    const count = series.length;
    const first = series[0];
    if (first.targetType === 'REPS' && first.targetValue !== null) {
        return `${count}×${first.targetValue}`;
    }
    if (first.targetType === 'TIME_SECONDS' && first.targetValue !== null) {
        const min = Math.floor(first.targetValue / 60);
        const sec = first.targetValue % 60;
        return min > 0 ? `${min}min${sec > 0 ? ` ${sec}s` : ''}` : `${sec}s`;
    }
    return `${count} série(s)`;
}
function TemplateCard({ template, selected, onClick }) {
    // Group exercises by groupPosition
    const byGroup = template.exercises.reduce((acc, ex)=>{
        const g = ex.groupPosition;
        if (!acc[g]) acc[g] = [];
        acc[g].push(ex);
        return acc;
    }, {});
    const groups = Object.values(byGroup);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `template-card${selected ? ' selected' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "template-card-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "template-day-pill",
                                children: template.dayLabel
                            }, void 0, false, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "template-name",
                                children: template.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "template-focus",
                                children: template.focus
                            }, void 0, false, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge badge-info",
                        children: [
                            groups.length,
                            " grupos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "template-card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "template-exercise-list",
                        children: [
                            groups.slice(0, 5).map((group, i)=>{
                                const ex = group[0];
                                const total = group.length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "template-exercise-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--text-3)',
                                                fontSize: 10
                                            },
                                            children: [
                                                i + 1,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            style: {
                                                flex: 1
                                            },
                                            children: total > 1 ? group.map((e)=>e.exerciseNamePt).join(' + ') : ex.exerciseNamePt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        ex.series.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "template-exercise-sets",
                                            children: seriesSummary(ex.series)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/treinos/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this);
                            }),
                            groups.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    fontSize: 11,
                                    color: 'var(--text-3)',
                                    paddingTop: 2
                                },
                                children: [
                                    "+",
                                    groups.length - 5,
                                    " grupos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "template-preview-note",
                        children: "🔒 Execução e edição não implementadas neste protótipo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/treinos/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TemplateDetail({ template }) {
    const byGroup = template.exercises.reduce((acc, ex)=>{
        const g = ex.groupPosition;
        if (!acc[g]) acc[g] = [];
        acc[g].push(ex);
        return acc;
    }, {});
    const groups = Object.values(byGroup);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "detail-card",
        style: {
            position: 'sticky',
            top: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 10,
                                color: 'var(--text-3)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                marginBottom: 4
                            },
                            children: template.dayLabel
                        }, void 0, false, {
                            fileName: "[project]/src/app/treinos/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "detail-title",
                            children: template.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/treinos/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "detail-subtitle",
                            children: template.focus
                        }, void 0, false, {
                            fileName: "[project]/src/app/treinos/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treinos/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxHeight: 'calc(100vh - 240px)',
                    overflowY: 'auto'
                },
                children: groups.map((group, gi)=>{
                    const isMulti = group.length > 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: '1px solid var(--border)',
                            padding: '10px 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: 'var(--text-3)',
                                            background: 'var(--surface-2)',
                                            padding: '2px 6px',
                                            borderRadius: 3
                                        },
                                        children: gi + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/treinos/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    isMulti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge badge-info",
                                        children: group[0].groupType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/treinos/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            group.map((ex, ei)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: ei < group.length - 1 ? 8 : 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'var(--text)'
                                            },
                                            children: ex.exerciseNamePt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: 'var(--text-3)',
                                                marginBottom: 4
                                            },
                                            children: ex.exerciseName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 4,
                                                flexWrap: 'wrap'
                                            },
                                            children: ex.series.map((s, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge badge-info",
                                                    children: [
                                                        s.targetType === 'REPS' ? `${s.targetValue} reps` : s.targetType === 'TIME_SECONDS' ? `${s.targetValue}s` : 'falha',
                                                        s.intensityMetric !== 'NONE' && ` · ${s.intensityMetric} ${s.intensityValue}`
                                                    ]
                                                }, si, true, {
                                                    fileName: "[project]/src/app/treinos/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        ex.executionNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 6,
                                                padding: '6px 8px',
                                                background: 'var(--surface-2)',
                                                borderRadius: 4,
                                                fontSize: 11,
                                                color: 'var(--text-2)',
                                                whiteSpace: 'pre-line'
                                            },
                                            children: ex.executionNote
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, ei, true, {
                                    fileName: "[project]/src/app/treinos/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, gi, true, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/treinos/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function TreinosPage() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "page-title",
                            children: "Templates de Treino"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treinos/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "page-subtitle",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_TEMPLATES"].length,
                                " templates ativos · visualização de protótipo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/treinos/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treinos/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock-notice",
                        children: "⚠ Templates em modo de leitura. Edição e execução serão implementadas com o backend."
                    }, void 0, false, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "library-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "library-list",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "template-grid",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_TEMPLATES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                            template: t,
                                            selected: selected?.id === t.id,
                                            onClick: ()=>setSelected(selected?.id === t.id ? null : t)
                                        }, t.id, false, {
                                            fileName: "[project]/src/app/treinos/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treinos/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateDetail, {
                                    template: selected
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treinos/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/treinos/page.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treinos/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treinos/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_1z9sre6._.js.map