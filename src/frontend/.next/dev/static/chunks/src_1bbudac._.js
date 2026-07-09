(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock/templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/player/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/templates.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TEMPLATE = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TEMPLATES"].find((t)=>t.name === 'Upper A') ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TEMPLATES"][1];
function PlayerPage() {
    _s();
    const [groupIdx, setGroupIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timerActive, setTimerActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completedSets, setCompletedSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [repsInput, setRepsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loadInput, setLoadInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const byGroup = TEMPLATE.exercises.reduce((acc, ex)=>{
        const g = ex.groupPosition;
        if (!acc[g]) acc[g] = [];
        acc[g].push(ex);
        return acc;
    }, {});
    const groups = Object.values(byGroup);
    const currentGroup = groups[groupIdx] ?? null;
    const ex = currentGroup?.[0];
    const seriesForEx = ex ? completedSets.filter((s)=>s.exerciseId === ex.exerciseId) : [];
    const currentSeriesOrder = seriesForEx.length + 1;
    const targetSeries = ex?.series[seriesForEx.length];
    function markSet() {
        if (!ex || !targetSeries) return;
        setCompletedSets((prev)=>[
                ...prev,
                {
                    exerciseId: ex.exerciseId,
                    seriesOrder: currentSeriesOrder,
                    reps: repsInput ? Number(repsInput) : null,
                    loadKg: loadInput ? Number(loadInput) : null
                }
            ]);
        setRepsInput('');
        setLoadInput('');
        setTimerActive(true);
    }
    const isExerciseDone = ex && seriesForEx.length >= ex.series.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-title",
                                children: "Workout Player"
                            }, void 0, false, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-subtitle",
                                children: [
                                    TEMPLATE.name,
                                    " · ",
                                    TEMPLATE.dayLabel,
                                    " · preview de protótipo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/player/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary btn-sm",
                                disabled: true,
                                children: "← Anterior"
                            }, void 0, false, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary btn-sm",
                                onClick: ()=>{
                                    if (groupIdx < groups.length - 1) {
                                        setGroupIdx((i)=>i + 1);
                                        setTimerActive(false);
                                    }
                                },
                                disabled: groupIdx >= groups.length - 1,
                                children: "Próximo →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/player/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/player/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mock-notice",
                        children: "⚠ Player em modo protótipo. Persistência de histórico não implementada."
                    }, void 0, false, {
                        fileName: "[project]/src/app/player/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 16,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    height: 4,
                                    background: 'var(--surface-2)',
                                    borderRadius: 2,
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        width: `${(groupIdx + 1) / groups.length * 100}%`,
                                        background: 'var(--accent)',
                                        borderRadius: 2,
                                        transition: 'width 0.3s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/player/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: 'var(--text-3)',
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    groupIdx + 1,
                                    "/",
                                    groups.length,
                                    " grupos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/player/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    currentGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: currentGroup.map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "player-exercise-card",
                                        style: {
                                            marginBottom: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "player-exercise-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "player-exercise-name",
                                                                children: ex.exerciseNamePt
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/player/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, this),
                                                            currentGroup.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "badge badge-info",
                                                                children: ex.groupType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/player/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--text-2)',
                                                            marginTop: 4
                                                        },
                                                        children: ex.exerciseName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    ex.executionNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        style: {
                                                            marginTop: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'var(--text-3)',
                                                                    cursor: 'pointer'
                                                                },
                                                                children: "Notas de execução"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/player/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "player-exercise-note",
                                                                style: {
                                                                    marginTop: 6
                                                                },
                                                                children: ex.executionNote
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/player/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "player-series-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "#"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "Alvo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "Carga (kg)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "Reps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            completedSets.filter((s)=>s.exerciseId === ex.exerciseId).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "player-series-row done",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: 'var(--green)',
                                                                fontSize: 11
                                                            },
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'var(--text-3)'
                                                            },
                                                            children: ex.series[s.seriesOrder - 1]?.targetType === 'REPS' ? `${ex.series[s.seriesOrder - 1]?.targetValue} reps` : `${ex.series[s.seriesOrder - 1]?.targetValue}s`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: s.loadKg ?? '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: s.reps ?? '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, s.seriesOrder, true, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 23
                                                }, this)),
                                            i === 0 && targetSeries && !isExerciseDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "player-series-row",
                                                style: {
                                                    background: 'var(--accent-bg)',
                                                    borderLeft: '2px solid var(--accent)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: 'var(--accent)'
                                                        },
                                                        children: currentSeriesOrder
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11
                                                        },
                                                        children: [
                                                            targetSeries.targetType === 'REPS' ? `${targetSeries.targetValue} reps` : targetSeries.targetType === 'TIME_SECONDS' ? `${targetSeries.targetValue}s` : 'Falha',
                                                            targetSeries.intensityMetric !== 'NONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--text-3)',
                                                                    marginLeft: 4
                                                                },
                                                                children: [
                                                                    targetSeries.intensityMetric,
                                                                    " ",
                                                                    targetSeries.intensityValue
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/player/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "player-input",
                                                            type: "number",
                                                            placeholder: "kg",
                                                            value: loadInput,
                                                            onChange: (e)=>setLoadInput(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "player-input",
                                                            type: "number",
                                                            placeholder: "reps",
                                                            value: repsInput,
                                                            onChange: (e)=>setRepsInput(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-primary btn-sm",
                                                            onClick: markSet,
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this),
                                            isExerciseDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '10px 16px',
                                                    fontSize: 12,
                                                    color: 'var(--green)'
                                                },
                                                children: "✓ Exercício concluído"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/player/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-sidebar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "player-timer-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timer-label",
                                                children: timerActive ? 'Descanso' : 'Próxima série'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timer-display",
                                                style: {
                                                    color: timerActive ? 'var(--accent)' : 'var(--text-3)'
                                                },
                                                children: timerActive ? '01:30' : '—:——'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timer-subtext",
                                                children: timerActive ? 'Timer de descanso (placeholder)' : 'Inicia após registrar a série'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            timerActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-sm",
                                                style: {
                                                    marginTop: 10,
                                                    width: '100%'
                                                },
                                                onClick: ()=>setTimerActive(false),
                                                children: "Pular descanso"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/player/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    targetSeries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 600,
                                                        color: 'var(--text-3)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.06em',
                                                        marginBottom: 8
                                                    },
                                                    children: "Série atual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "detail-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-label",
                                                            children: "Alvo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-value",
                                                            children: targetSeries.targetType === 'REPS' ? `${targetSeries.targetValue} reps` : `${targetSeries.targetValue}s`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "detail-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-label",
                                                            children: "Intensidade"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-value",
                                                            children: targetSeries.intensityMetric === 'NONE' ? '—' : `${targetSeries.intensityMetric} ${targetSeries.intensityValue}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "detail-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-label",
                                                            children: "Descanso"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-value",
                                                            children: [
                                                                targetSeries.restSeconds,
                                                                "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "detail-row",
                                                    style: {
                                                        border: 'none'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-label",
                                                            children: "Carga sugerida"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "detail-value",
                                                            children: targetSeries.suggestedLoadKg ? `${targetSeries.suggestedLoadKg} kg` : '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/player/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/player/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/player/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/player/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pain-note-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pain-note-title",
                                                children: "⚠ Dor / Instabilidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pain-buttons",
                                                children: [
                                                    'Dor lombar',
                                                    'Dor no ombro',
                                                    'Instabilidade',
                                                    'Dor no joelho',
                                                    'Outro'
                                                ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "pain-btn",
                                                        onClick: ()=>alert(`Nota rápida: "${label}" — não implementado`),
                                                        children: label
                                                    }, label, false, {
                                                        fileName: "[project]/src/app/player/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/player/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/player/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/player/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/player/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/player/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PlayerPage, "7qbhdtJTx+J5MUBW6XxiKS0SpR8=");
_c = PlayerPage;
var _c;
__turbopack_context__.k.register(_c, "PlayerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1bbudac._.js.map