(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock/exercises.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Initial global exercise catalog.
// UUIDs are stable — do not change them; templates reference these IDs.
__turbopack_context__.s([
    "MOCK_GLOBAL_EXERCISES",
    ()=>MOCK_GLOBAL_EXERCISES
]);
const MOCK_GLOBAL_EXERCISES = [
    {
        id: '7f2b5a5e-1c2d-4d0f-8c71-6c3fdc85b2ab',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Chest Press (Machine)',
        namePt: 'Supino na máquina / Chest press',
        movementPattern: 'HORIZONTAL_PUSH',
        bodyArea: 'CHEST',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Costas apoiadas, escápulas encaixadas, ombro no banco.',
        active: true
    },
    {
        id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Seated Row (Cable)',
        namePt: 'Remada sentada no cabo',
        movementPattern: 'HORIZONTAL_PULL',
        bodyArea: 'BACK',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Tronco estável, sem oscilação lombar.',
        active: true
    },
    {
        id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Incline Chest Press (Machine)',
        namePt: 'Supino inclinado na máquina',
        movementPattern: 'INCLINE_PUSH',
        bodyArea: 'UPPER_CHEST',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Amplitude confortável, sem dor no ombro direito.',
        active: true
    },
    {
        id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Lat Pulldown (Cable)',
        namePt: 'Puxada alta aberta',
        movementPattern: 'VERTICAL_PULL',
        bodyArea: 'LATS',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Puxar para a parte alta do peito, sem balançar o corpo.',
        active: true
    },
    {
        id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Lateral Raise (Machine)',
        namePt: 'Elevação lateral na máquina',
        movementPattern: 'SHOULDER_ABDUCTION',
        bodyArea: 'LATERAL_DELTS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Repetições controladas, sem impulso.',
        active: true
    },
    {
        id: 'e5f6a7b8-c9d0-1234-efab-345678901234',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Triceps Pushdown (Cable - Straight Bar)',
        namePt: 'Tríceps polia barra reta',
        movementPattern: 'ELBOW_EXTENSION',
        bodyArea: 'TRICEPS',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Cotovelos fixos, sem inclinar o tronco.',
        active: true
    },
    {
        id: 'f6a7b8c9-d0e1-2345-fabc-456789012345',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Leg Extension (Machine)',
        namePt: 'Cadeira extensora',
        movementPattern: 'KNEE_EXTENSION',
        bodyArea: 'QUADS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Descida controlada, sem bater os pesos.',
        active: true
    },
    {
        id: 'a7b8c9d0-e1f2-3456-abcd-567890123456',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Seated Leg Curl',
        namePt: 'Mesa flexora sentada',
        movementPattern: 'KNEE_FLEXION',
        bodyArea: 'HAMSTRINGS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Não levantar o quadril, retorno controlado.',
        active: true
    },
    {
        id: 'b8c9d0e1-f2a3-4567-bcde-678901234567',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Hip Thrust (Machine or Smith)',
        namePt: 'Elevação pélvica / Hip Thrust',
        movementPattern: 'HIP_EXTENSION',
        bodyArea: 'GLUTES',
        equipmentType: 'MIXED',
        defaultSafetyNotes: 'Coluna neutra, sem hiperestender a lombar.',
        active: true
    },
    {
        id: 'c9d0e1f2-a3b4-5678-cdef-789012345678',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Bulgarian Split Squat',
        namePt: 'Afundo búlgaro',
        movementPattern: 'UNILATERAL_SQUAT',
        bodyArea: 'QUADS',
        equipmentType: 'MIXED',
        defaultSafetyNotes: 'Priorizar estabilidade, sem dor no quadril.',
        active: true
    },
    {
        id: 'd0e1f2a3-b4c5-6789-defa-890123456789',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Standing Calf Raise',
        namePt: 'Panturrilha em pé',
        movementPattern: 'CALF_RAISE',
        bodyArea: 'CALVES',
        equipmentType: 'MIXED',
        defaultSafetyNotes: 'Amplitude completa, segurar 1 s no topo.',
        active: true
    },
    {
        id: 'e1f2a3b4-c5d6-7890-efab-901234567890',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Cable Crunch',
        namePt: 'Abdominal no cabo',
        movementPattern: 'TRUNK_FLEXION',
        bodyArea: 'ABS',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Flexionar a coluna, não puxar com os braços.',
        active: true
    },
    {
        id: 'f2a3b4c5-d6e7-8901-fabc-012345678901',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Iso-Lateral Row (Machine)',
        namePt: 'Remada iso-lateral máquina',
        movementPattern: 'HORIZONTAL_PULL',
        bodyArea: 'BACK',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Peito apoiado se possível, não rotacionar o tronco.',
        active: true
    },
    {
        id: 'a3b4c5d6-e7f8-9012-abcd-123456789012',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Lat Pulldown - Underhand (Cable)',
        namePt: 'Puxada alta pegada supinada',
        movementPattern: 'VERTICAL_PULL',
        bodyArea: 'LATS',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Tronco firme, não jogar o corpo para trás.',
        active: true
    },
    {
        id: 'b4c5d6e7-f8a9-0123-bcde-234567890123',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Cable Crossover',
        namePt: 'Crucifixo / crossover no cabo',
        movementPattern: 'CHEST_FLY',
        bodyArea: 'CHEST',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Carga moderada, não forçar o alongamento do ombro.',
        active: true
    },
    {
        id: 'c5d6e7f8-a9b0-1234-cdef-345678901234',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Reverse Fly (Machine)',
        namePt: 'Crucifixo inverso máquina',
        movementPattern: 'REAR_DELT_FLY',
        bodyArea: 'REAR_DELTS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Movimento controlado, sem dor no manguito rotador.',
        active: true
    },
    {
        id: 'd6e7f8a9-b0c1-2345-defa-456789012345',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Bicep Curl (Machine)',
        namePt: 'Rosca bíceps máquina',
        movementPattern: 'ELBOW_FLEXION',
        bodyArea: 'BICEPS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Cotovelos apoiados, sem balançar.',
        active: true
    },
    {
        id: 'e7f8a9b0-c1d2-3456-efab-567890123456',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Lying Leg Curl (Machine)',
        namePt: 'Mesa flexora deitada',
        movementPattern: 'KNEE_FLEXION',
        bodyArea: 'HAMSTRINGS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Não levantar o quadril, retorno controlado.',
        active: true
    },
    {
        id: 'f8a9b0c1-d2e3-4567-fabc-678901234567',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Hip Abduction (Machine)',
        namePt: 'Abdutora',
        movementPattern: 'HIP_ABDUCTION',
        bodyArea: 'GLUTE_MEDIUS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Tronco estático, sem inclinar ou girar o quadril.',
        active: true
    },
    {
        id: 'a9b0c1d2-e3f4-5678-abcd-789012345678',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Glute Kickback (Machine)',
        namePt: 'Coice glúteo máquina',
        movementPattern: 'HIP_EXTENSION',
        bodyArea: 'GLUTES',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Movimento pelo quadril, sem compensar com lombar.',
        active: true
    },
    {
        id: 'b0c1d2e3-f4a5-6789-bcde-890123456789',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Plank',
        namePt: 'Prancha',
        movementPattern: 'ANTI_EXTENSION_CORE',
        bodyArea: 'CORE',
        equipmentType: 'BODYWEIGHT',
        defaultSafetyNotes: 'Coluna neutra, parar antes de perder a postura.',
        active: true
    },
    {
        id: 'c1d2e3f4-a5b6-7890-cdef-901234567890',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Shoulder Press (Machine)',
        namePt: 'Desenvolvimento máquina',
        movementPattern: 'VERTICAL_PUSH',
        bodyArea: 'SHOULDERS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Pegada neutra se possível, amplitude sem dor.',
        active: true
    },
    {
        id: 'd2e3f4a5-b6c7-8901-defa-012345678901',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Preacher Curl (Machine)',
        namePt: 'Rosca Scott máquina',
        movementPattern: 'ELBOW_FLEXION',
        bodyArea: 'BICEPS',
        equipmentType: 'MACHINE',
        defaultSafetyNotes: 'Cotovelos fixos, amplitude confortável.',
        active: true
    },
    {
        id: 'e3f4a5b6-c7d8-9012-efab-123456789012',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Hammer Curl (Dumbbell)',
        namePt: 'Rosca martelo com halteres',
        movementPattern: 'ELBOW_FLEXION',
        bodyArea: 'BICEPS',
        equipmentType: 'DUMBBELL',
        defaultSafetyNotes: 'Punho neutro, sem balançar o tronco.',
        active: true
    },
    {
        id: 'f4a5b6c7-d8e9-0123-fabc-234567890123',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Triceps Extension (Cable)',
        namePt: 'Extensão de tríceps no cabo',
        movementPattern: 'ELBOW_EXTENSION',
        bodyArea: 'TRICEPS',
        equipmentType: 'CABLE',
        defaultSafetyNotes: 'Cotovelos fixos, controle total.',
        active: true
    },
    {
        id: 'a5b6c7d8-e9f0-1234-abcd-345678901234',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Elliptical / Transport',
        namePt: 'Transport / Elíptico',
        movementPattern: 'ZONE_2_CARDIO',
        bodyArea: 'CARDIO',
        equipmentType: 'CARDIO_MACHINE',
        defaultSafetyNotes: 'Ritmo sustentável, baixo impacto.',
        active: true
    },
    {
        id: 'b6c7d8e9-f0a1-2345-bcde-456789012345',
        scope: 'GLOBAL',
        ownerUserId: null,
        name: 'Mobility',
        namePt: 'Mobilidade leve',
        movementPattern: 'MOBILITY',
        bodyArea: 'MOBILITY',
        equipmentType: 'BODYWEIGHT',
        defaultSafetyNotes: 'Sem torção lombar forçada, sem dor.',
        active: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/adapters/exercises.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminCreateGlobalExercise",
    ()=>adminCreateGlobalExercise,
    "adminDeactivateGlobalExercise",
    ()=>adminDeactivateGlobalExercise,
    "adminReactivateGlobalExercise",
    ()=>adminReactivateGlobalExercise,
    "adminUpdateGlobalExercise",
    ()=>adminUpdateGlobalExercise,
    "createPrivateExercise",
    ()=>createPrivateExercise,
    "deactivatePrivateExercise",
    ()=>deactivatePrivateExercise,
    "getExercise",
    ()=>getExercise,
    "listAdminExercises",
    ()=>listAdminExercises,
    "listAllExercisesIncludingInactive",
    ()=>listAllExercisesIncludingInactive,
    "listExercises",
    ()=>listExercises,
    "reactivatePrivateExercise",
    ()=>reactivatePrivateExercise,
    "updatePrivateExercise",
    ()=>updatePrivateExercise
]);
// Exercise adapter — mock implementation.
// All functions return Promises so switching to a real API is a drop-in change.
// Private exercises are persisted in localStorage under STORAGE_KEY.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/exercises.ts [app-client] (ecmascript)");
;
const STORAGE_KEY = 'phoenix_private_exercises';
function randomUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    // Fallback
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
}
function loadPrivateExercises() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function savePrivateExercises(exercises) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises));
}
// In-memory admin-created global exercises (session only)
const sessionGlobalExtras = [];
async function listExercises(filters = {}) {
    const { scope, movementPattern, bodyArea, equipmentType, search, userId } = filters;
    const active = filters.active ?? true;
    const privateExercises = userId ? loadPrivateExercises().filter((e)=>e.ownerUserId === userId) : [];
    let exercises = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_GLOBAL_EXERCISES"],
        ...sessionGlobalExtras,
        ...privateExercises
    ];
    exercises = exercises.filter((e)=>e.active === active);
    if (scope) exercises = exercises.filter((e)=>e.scope === scope);
    if (movementPattern) exercises = exercises.filter((e)=>e.movementPattern === movementPattern);
    if (bodyArea) exercises = exercises.filter((e)=>e.bodyArea === bodyArea);
    if (equipmentType) exercises = exercises.filter((e)=>e.equipmentType === equipmentType);
    if (search?.trim()) {
        const q = search.trim().toLowerCase();
        exercises = exercises.filter((e)=>e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q));
    }
    return exercises;
}
async function listAllExercisesIncludingInactive(filters = {}) {
    const { scope, movementPattern, bodyArea, equipmentType, search, userId } = filters;
    const privateExercises = userId ? loadPrivateExercises().filter((e)=>e.ownerUserId === userId) : [];
    let exercises = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_GLOBAL_EXERCISES"],
        ...sessionGlobalExtras,
        ...privateExercises
    ];
    if (scope) exercises = exercises.filter((e)=>e.scope === scope);
    if (movementPattern) exercises = exercises.filter((e)=>e.movementPattern === movementPattern);
    if (bodyArea) exercises = exercises.filter((e)=>e.bodyArea === bodyArea);
    if (equipmentType) exercises = exercises.filter((e)=>e.equipmentType === equipmentType);
    if (search?.trim()) {
        const q = search.trim().toLowerCase();
        exercises = exercises.filter((e)=>e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q));
    }
    return exercises;
}
async function getExercise(id, userId) {
    const global = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_GLOBAL_EXERCISES"].find((e)=>e.id === id) ?? sessionGlobalExtras.find((e)=>e.id === id) ?? null;
    if (global) return global;
    if (userId) {
        const priv = loadPrivateExercises().find((e)=>e.id === id && e.ownerUserId === userId);
        return priv ?? null;
    }
    return null;
}
async function createPrivateExercise(input, userId) {
    const exercise = {
        id: randomUUID(),
        scope: 'USER',
        ownerUserId: userId,
        name: input.name.trim(),
        namePt: input.namePt?.trim() || input.name.trim(),
        movementPattern: input.movementPattern,
        bodyArea: input.bodyArea,
        equipmentType: input.equipmentType,
        defaultSafetyNotes: input.defaultSafetyNotes?.trim() || null,
        active: true
    };
    const existing = loadPrivateExercises();
    savePrivateExercises([
        ...existing,
        exercise
    ]);
    return exercise;
}
async function updatePrivateExercise(id, input, userId) {
    const exercises = loadPrivateExercises();
    const idx = exercises.findIndex((e)=>e.id === id && e.ownerUserId === userId);
    if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');
    const prev = exercises[idx];
    const updated = {
        ...prev,
        ...input.name !== undefined ? {
            name: input.name.trim()
        } : {},
        ...input.namePt !== undefined ? {
            namePt: input.namePt.trim() || input.name?.trim() || prev.name
        } : {},
        ...input.movementPattern !== undefined ? {
            movementPattern: input.movementPattern
        } : {},
        ...input.bodyArea !== undefined ? {
            bodyArea: input.bodyArea
        } : {},
        ...input.equipmentType !== undefined ? {
            equipmentType: input.equipmentType
        } : {},
        ...input.defaultSafetyNotes !== undefined ? {
            defaultSafetyNotes: input.defaultSafetyNotes.trim() || null
        } : {}
    };
    exercises[idx] = updated;
    savePrivateExercises(exercises);
    return updated;
}
async function deactivatePrivateExercise(id, userId) {
    const exercises = loadPrivateExercises();
    const idx = exercises.findIndex((e)=>e.id === id && e.ownerUserId === userId);
    if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');
    exercises[idx] = {
        ...exercises[idx],
        active: false
    };
    savePrivateExercises(exercises);
    return exercises[idx];
}
async function reactivatePrivateExercise(id, userId) {
    const exercises = loadPrivateExercises();
    const idx = exercises.findIndex((e)=>e.id === id && e.ownerUserId === userId);
    if (idx === -1) throw new Error('Exercício não encontrado ou sem permissão.');
    exercises[idx] = {
        ...exercises[idx],
        active: true
    };
    savePrivateExercises(exercises);
    return exercises[idx];
}
async function adminCreateGlobalExercise(input) {
    const exercise = {
        id: randomUUID(),
        scope: 'GLOBAL',
        ownerUserId: null,
        name: input.name.trim(),
        namePt: input.namePt?.trim() || input.name.trim(),
        movementPattern: input.movementPattern,
        bodyArea: input.bodyArea,
        equipmentType: input.equipmentType,
        defaultSafetyNotes: input.defaultSafetyNotes?.trim() || null,
        active: true
    };
    sessionGlobalExtras.push(exercise);
    return exercise;
}
async function adminUpdateGlobalExercise(id, input) {
    // Session-created exercises live in sessionGlobalExtras
    const idx = sessionGlobalExtras.findIndex((e)=>e.id === id);
    if (idx !== -1) {
        const prev = sessionGlobalExtras[idx];
        const updated = {
            ...prev,
            ...input.name !== undefined ? {
                name: input.name.trim()
            } : {},
            ...input.namePt !== undefined ? {
                namePt: input.namePt.trim() || input.name?.trim() || prev.name
            } : {},
            ...input.movementPattern !== undefined ? {
                movementPattern: input.movementPattern
            } : {},
            ...input.bodyArea !== undefined ? {
                bodyArea: input.bodyArea
            } : {},
            ...input.equipmentType !== undefined ? {
                equipmentType: input.equipmentType
            } : {},
            ...input.defaultSafetyNotes !== undefined ? {
                defaultSafetyNotes: input.defaultSafetyNotes.trim() || null
            } : {}
        };
        sessionGlobalExtras[idx] = updated;
        return updated;
    }
    // Seed exercises are read-only at runtime — in a real backend this would be a PATCH call
    throw new Error('Exercícios do catálogo inicial não podem ser editados neste protótipo (sem backend). Exercícios criados nesta sessão podem ser editados.');
}
async function adminDeactivateGlobalExercise(id) {
    const idx = sessionGlobalExtras.findIndex((e)=>e.id === id);
    if (idx !== -1) {
        sessionGlobalExtras[idx] = {
            ...sessionGlobalExtras[idx],
            active: false
        };
        return sessionGlobalExtras[idx];
    }
    throw new Error('Exercícios do catálogo inicial não podem ser desativados neste protótipo (sem backend).');
}
async function adminReactivateGlobalExercise(id) {
    const idx = sessionGlobalExtras.findIndex((e)=>e.id === id);
    if (idx !== -1) {
        sessionGlobalExtras[idx] = {
            ...sessionGlobalExtras[idx],
            active: true
        };
        return sessionGlobalExtras[idx];
    }
    throw new Error('Exercícios do catálogo inicial não podem ser reativados neste protótipo (sem backend).');
}
async function listAdminExercises(filters = {}) {
    const { scope, movementPattern, bodyArea, equipmentType, search } = filters;
    const active = filters.active ?? true;
    let exercises = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_GLOBAL_EXERCISES"],
        ...sessionGlobalExtras
    ];
    exercises = exercises.filter((e)=>e.active === active);
    if (scope) exercises = exercises.filter((e)=>e.scope === scope);
    if (movementPattern) exercises = exercises.filter((e)=>e.movementPattern === movementPattern);
    if (bodyArea) exercises = exercises.filter((e)=>e.bodyArea === bodyArea);
    if (equipmentType) exercises = exercises.filter((e)=>e.equipmentType === equipmentType);
    if (search?.trim()) {
        const q = search.trim().toLowerCase();
        exercises = exercises.filter((e)=>e.name.toLowerCase().includes(q) || e.namePt.toLowerCase().includes(q));
    }
    return exercises;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/labels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Portuguese display labels for enum values.
// Keep these separate from types so backend contracts stay in English.
__turbopack_context__.s([
    "bodyAreaLabel",
    ()=>bodyAreaLabel,
    "equipmentTypeLabel",
    ()=>equipmentTypeLabel,
    "movementPatternLabel",
    ()=>movementPatternLabel,
    "scopeLabel",
    ()=>scopeLabel
]);
const movementPatternLabel = {
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
    MOBILITY: 'Mobilidade'
};
const bodyAreaLabel = {
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
    MOBILITY: 'Mobilidade'
};
const equipmentTypeLabel = {
    MACHINE: 'Máquina',
    CABLE: 'Cabo / Polia',
    DUMBBELL: 'Halter',
    BODYWEIGHT: 'Peso Corporal',
    SMITH_MACHINE: 'Smith',
    CARDIO_MACHINE: 'Cardio',
    MIXED: 'Misto'
};
const scopeLabel = {
    GLOBAL: 'Global',
    USER: 'Privado'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/exercises/ExerciseForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExerciseForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/labels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MOVEMENT_PATTERNS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movementPatternLabel"]);
const BODY_AREAS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyAreaLabel"]);
const EQUIPMENT_TYPES = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equipmentTypeLabel"]);
function ExerciseForm({ initial, isAdmin = false, onSave, onCancel }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.name ?? '');
    const [namePt, setNamePt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.namePt ?? '');
    const [movementPattern, setMovementPattern] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.movementPattern ?? '');
    const [bodyArea, setBodyArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.bodyArea ?? '');
    const [equipmentType, setEquipmentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.equipmentType ?? '');
    const [safetyNotes, setSafetyNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.defaultSafetyNotes ?? '');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function validate() {
        const e = {};
        if (!name.trim()) e.name = 'Nome é obrigatório.';
        else if (name.trim().length > 120) e.name = 'Máximo 120 caracteres.';
        if (namePt.trim().length > 160) e.namePt = 'Máximo 160 caracteres.';
        if (!movementPattern) e.movementPattern = 'Selecione um padrão de movimento.';
        if (!bodyArea) e.bodyArea = 'Selecione uma área do corpo.';
        if (!equipmentType) e.equipmentType = 'Selecione o equipamento.';
        if (safetyNotes.trim().length > 2000) e.defaultSafetyNotes = 'Máximo 2000 caracteres.';
        return e;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setSaving(true);
        try {
            await onSave({
                name: name.trim(),
                namePt: namePt.trim() || undefined,
                movementPattern: movementPattern,
                bodyArea: bodyArea,
                equipmentType: equipmentType,
                defaultSafetyNotes: safetyNotes.trim() || undefined
            });
        } catch (err) {
            setErrors({
                name: String(err)
            });
        } finally{
            setSaving(false);
        }
    }
    const title = initial ? 'Editar exercício' : isAdmin ? 'Novo exercício global' : 'Novo exercício privado';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-overlay",
        onClick: (e)=>e.target === e.currentTarget && onCancel(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-modal-title",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-icon",
                            onClick: onCancel,
                            "aria-label": "Fechar",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-modal-body",
                            children: [
                                !isAdmin && !initial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '8px 12px',
                                        background: 'var(--amber-bg)',
                                        border: '1px solid rgba(245,158,11,0.25)',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: 12,
                                        color: 'var(--amber)'
                                    },
                                    children: "Este exercício será privado e visível apenas para você."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label form-label-required",
                                            children: "Nome do exercício"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `form-input${errors.name ? ' error' : ''}`,
                                            type: "text",
                                            placeholder: "ex: Remada curvada com halteres",
                                            value: name,
                                            onChange: (e)=>{
                                                setName(e.target.value);
                                                setErrors((prev)=>({
                                                        ...prev,
                                                        name: undefined
                                                    }));
                                            },
                                            maxLength: 120,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 123,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Nome em português"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `form-input${errors.namePt ? ' error' : ''}`,
                                            type: "text",
                                            placeholder: "Deixe vazio para usar o mesmo nome",
                                            value: namePt,
                                            onChange: (e)=>{
                                                setNamePt(e.target.value);
                                                setErrors((prev)=>({
                                                        ...prev,
                                                        namePt: undefined
                                                    }));
                                            },
                                            maxLength: 160
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-hint",
                                            children: "Se vazio, o nome em inglês será usado."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        errors.namePt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.namePt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 140,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label form-label-required",
                                            children: "Área do corpo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: `form-select${errors.bodyArea ? ' error' : ''}`,
                                            value: bodyArea,
                                            onChange: (e)=>{
                                                setBodyArea(e.target.value);
                                                setErrors((prev)=>({
                                                        ...prev,
                                                        bodyArea: undefined
                                                    }));
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecionar…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                BODY_AREAS.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: v,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyAreaLabel"][v]
                                                    }, v, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        errors.bodyArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.bodyArea
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 160,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label form-label-required",
                                            children: "Padrão de movimento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: `form-select${errors.movementPattern ? ' error' : ''}`,
                                            value: movementPattern,
                                            onChange: (e)=>{
                                                setMovementPattern(e.target.value);
                                                setErrors((prev)=>({
                                                        ...prev,
                                                        movementPattern: undefined
                                                    }));
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecionar…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                MOVEMENT_PATTERNS.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: v,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movementPatternLabel"][v]
                                                    }, v, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        errors.movementPattern && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.movementPattern
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label form-label-required",
                                            children: "Equipamento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: `form-select${errors.equipmentType ? ' error' : ''}`,
                                            value: equipmentType,
                                            onChange: (e)=>{
                                                setEquipmentType(e.target.value);
                                                setErrors((prev)=>({
                                                        ...prev,
                                                        equipmentType: undefined
                                                    }));
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecionar…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                EQUIPMENT_TYPES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: v,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equipmentTypeLabel"][v]
                                                    }, v, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        errors.equipmentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.equipmentType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 202,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Notas de segurança"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "form-textarea",
                                            placeholder: "Restrições de execução, cuidados com lombar ou ombro…",
                                            value: safetyNotes,
                                            onChange: (e)=>setSafetyNotes(e.target.value),
                                            maxLength: 2000
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        errors.defaultSafetyNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-error",
                                            children: errors.defaultSafetyNotes
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-modal-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn-ghost",
                                    onClick: onCancel,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-primary",
                                    disabled: saving,
                                    children: saving ? 'Salvando…' : initial ? 'Salvar alterações' : 'Criar exercício'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/exercises/ExerciseForm.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(ExerciseForm, "MyVRP75dLKjiYuVhP8ijLREXWiw=");
_c = ExerciseForm;
var _c;
__turbopack_context__.k.register(_c, "ExerciseForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/exercises/ExerciseDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExerciseDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/labels.ts [app-client] (ecmascript)");
'use client';
;
;
function ExerciseDetail({ exercise, currentUserId, isAdmin, onEdit, onDeactivate, onReactivate, onClose }) {
    const isOwned = exercise.scope === 'USER' && exercise.ownerUserId === currentUserId;
    const canEdit = isOwned || isAdmin && exercise.scope === 'GLOBAL';
    const canDeactivate = isOwned || isAdmin && exercise.scope === 'GLOBAL';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "detail-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginBottom: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `badge ${exercise.scope === 'GLOBAL' ? 'badge-global' : 'badge-user'}`,
                                        children: exercise.scope === 'GLOBAL' ? '🌐 Global' : '🔒 Privado'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `badge ${exercise.active ? 'badge-active' : 'badge-inactive'}`,
                                        children: exercise.active ? 'Ativo' : 'Inativo'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-title",
                                children: exercise.namePt
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-subtitle",
                                children: exercise.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-icon",
                        onClick: onClose,
                        "aria-label": "Fechar painel",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-label",
                                children: "Área do corpo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-value",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyAreaLabel"][exercise.bodyArea]
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-label",
                                children: "Padrão de movimento"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-value",
                                style: {
                                    textAlign: 'right',
                                    maxWidth: 160
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movementPatternLabel"][exercise.movementPattern]
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-label",
                                children: "Equipamento"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-value",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equipmentTypeLabel"][exercise.equipmentType]
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-row",
                        style: {
                            border: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-label",
                                children: "Escopo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-value",
                                children: exercise.scope === 'GLOBAL' ? 'Catálogo global' : 'Exercício privado'
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    exercise.defaultSafetyNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-notes",
                        style: {
                            marginTop: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: 'var(--text-3)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    marginBottom: 5
                                },
                                children: "Notas de segurança"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            exercise.defaultSafetyNotes
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            (canEdit || canDeactivate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-actions",
                children: [
                    canEdit && onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary btn-sm",
                        onClick: ()=>onEdit(exercise),
                        children: "✏ Editar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this),
                    canDeactivate && exercise.active && onDeactivate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-danger btn-sm",
                        onClick: ()=>onDeactivate(exercise),
                        children: "Desativar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this),
                    canDeactivate && !exercise.active && onReactivate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary btn-sm",
                        onClick: ()=>onReactivate(exercise),
                        children: "Reativar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            !canEdit && !canDeactivate && exercise.scope === 'USER' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '10px 16px',
                    fontSize: 11,
                    color: 'var(--text-3)',
                    borderTop: '1px solid var(--border)'
                },
                children: "Exercício privado de outro atleta — sem permissão de edição."
            }, void 0, false, {
                fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/exercises/ExerciseDetail.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ExerciseDetail;
var _c;
__turbopack_context__.k.register(_c, "ExerciseDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/exercises/ExerciseLibrary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExerciseLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adapters/exercises.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/labels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/exercises/ExerciseForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/exercises/ExerciseDetail.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ALL = '';
const DEFAULT_FILTERS = {
    search: '',
    showInactive: false,
    scope: ALL,
    bodyArea: ALL,
    movementPattern: ALL,
    equipmentType: ALL
};
function ExerciseLibrary({ userId, isAdmin }) {
    _s();
    const [allExercises, setAllExercises] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_FILTERS);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingExercise, setEditingExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExerciseLibrary.useCallback[reload]": async ()=>{
            setLoading(true);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listAllExercisesIncludingInactive"])({
                userId
            });
            setAllExercises(data);
            setLoading(false);
        }
    }["ExerciseLibrary.useCallback[reload]"], [
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExerciseLibrary.useEffect": ()=>{
            reload();
        }
    }["ExerciseLibrary.useEffect"], [
        reload
    ]);
    // Apply filters client-side for instant feedback
    const filtered = allExercises.filter((ex)=>{
        if (!filters.showInactive && !ex.active) return false;
        if (filters.scope && ex.scope !== filters.scope) return false;
        if (filters.bodyArea && ex.bodyArea !== filters.bodyArea) return false;
        if (filters.movementPattern && ex.movementPattern !== filters.movementPattern) return false;
        if (filters.equipmentType && ex.equipmentType !== filters.equipmentType) return false;
        if (filters.search.trim()) {
            const q = filters.search.toLowerCase();
            return ex.name.toLowerCase().includes(q) || ex.namePt.toLowerCase().includes(q);
        }
        return true;
    });
    const hasActiveFilters = filters.search || filters.showInactive || filters.scope || filters.bodyArea || filters.movementPattern || filters.equipmentType;
    function resetFilters() {
        setFilters(DEFAULT_FILTERS);
    }
    // ── Write actions ──────────────────────────────────────────────────────────
    async function handleCreate(input) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPrivateExercise"])(input, userId);
        await reload();
        setShowForm(false);
        setEditingExercise(null);
    }
    async function handleEdit(input) {
        if (!editingExercise) return;
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePrivateExercise"])(editingExercise.id, input, userId);
        setSelected(updated);
        await reload();
        setShowForm(false);
        setEditingExercise(null);
    }
    async function handleDeactivate(ex) {
        if (!confirm(`Desativar "${ex.namePt}"? O exercício permanecerá no histórico.`)) return;
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deactivatePrivateExercise"])(ex.id, userId);
        setSelected(updated);
        await reload();
    }
    async function handleReactivate(ex) {
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adapters$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactivatePrivateExercise"])(ex.id, userId);
        setSelected(updated);
        await reload();
    }
    function openEdit(ex) {
        setEditingExercise(ex);
        setShowForm(true);
    }
    function openCreate() {
        setEditingExercise(null);
        setShowForm(true);
    }
    // ── Render ─────────────────────────────────────────────────────────────────
    // Collect unique values for filter dropdowns (from current data)
    const uniqueBodyAreas = [
        ...new Set(allExercises.map((e)=>e.bodyArea))
    ].sort();
    const uniquePatterns = [
        ...new Set(allExercises.map((e)=>e.movementPattern))
    ].sort();
    const uniqueEquipment = [
        ...new Set(allExercises.map((e)=>e.equipmentType))
    ].sort();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initial: editingExercise ?? undefined,
                isAdmin: isAdmin,
                onSave: editingExercise ? handleEdit : handleCreate,
                onCancel: ()=>{
                    setShowForm(false);
                    setEditingExercise(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-input-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "search-icon",
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "search-input",
                                type: "text",
                                placeholder: "Buscar exercício…",
                                value: filters.search,
                                onChange: (e)=>setFilters((f)=>({
                                            ...f,
                                            search: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `filter-toggle${filters.showInactive ? ' active' : ''}`,
                        onClick: ()=>setFilters((f)=>({
                                    ...f,
                                    showInactive: !f.showInactive
                                })),
                        children: [
                            filters.showInactive ? '◉' : '○',
                            " Inativos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-select",
                        value: filters.scope,
                        onChange: (e)=>setFilters((f)=>({
                                    ...f,
                                    scope: e.target.value
                                })),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Escopo: todos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "GLOBAL",
                                children: "🌐 Global"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "USER",
                                children: "🔒 Privado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-select",
                        value: filters.bodyArea,
                        onChange: (e)=>setFilters((f)=>({
                                    ...f,
                                    bodyArea: e.target.value
                                })),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Área: todas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            uniqueBodyAreas.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: v,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyAreaLabel"][v]
                                }, v, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-select",
                        value: filters.movementPattern,
                        onChange: (e)=>setFilters((f)=>({
                                    ...f,
                                    movementPattern: e.target.value
                                })),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Padrão: todos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            uniquePatterns.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: v,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movementPatternLabel"][v]
                                }, v, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-select",
                        value: filters.equipmentType,
                        onChange: (e)=>setFilters((f)=>({
                                    ...f,
                                    equipmentType: e.target.value
                                })),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Equip.: todos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            uniqueEquipment.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: v,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equipmentTypeLabel"][v]
                                }, v, false, {
                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "filter-reset",
                        onClick: resetFilters,
                        children: "✕ Limpar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    color: 'var(--text-3)',
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            loading ? 'Carregando…' : `${filtered.length} exercício${filtered.length !== 1 ? 's' : ''}`,
                            hasActiveFilters ? ' (filtrado)' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary btn-sm",
                        onClick: openCreate,
                        children: "+ Novo exercício privado"
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "library-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "library-list",
                        children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty-state",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "empty-state-icon",
                                        children: "◈"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "empty-state-title",
                                        children: loading ? 'Carregando exercícios…' : 'Nenhum exercício encontrado'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "empty-state-body",
                                        children: !loading && hasActiveFilters ? 'Tente ajustar os filtros ou limpar a busca.' : !loading && !isAdmin ? 'Crie seu primeiro exercício privado clicando no botão acima.' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    !loading && hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary btn-sm",
                                        onClick: resetFilters,
                                        children: "Limpar filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "data-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        width: 72
                                                    },
                                                    children: "Escopo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Nome"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Área"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Padrão"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Equipamento"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        width: 60
                                                    },
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: filtered.map((ex)=>{
                                            const isSelected = selected?.id === ex.id;
                                            const isOwned = ex.scope === 'USER' && ex.ownerUserId === userId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: [
                                                    isSelected ? 'row-selected' : '',
                                                    !ex.active ? 'row-inactive' : ''
                                                ].filter(Boolean).join(' '),
                                                onClick: ()=>setSelected(isSelected ? null : ex),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `badge ${ex.scope === 'GLOBAL' ? 'badge-global' : 'badge-user'}`,
                                                            children: ex.scope === 'GLOBAL' ? '🌐' : isOwned ? '🔒' : '👤'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "cell-name-stack",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cell-name-en truncate",
                                                                    style: {
                                                                        maxWidth: 200
                                                                    },
                                                                    children: ex.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cell-name-pt truncate",
                                                                    style: {
                                                                        maxWidth: 200
                                                                    },
                                                                    children: ex.namePt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: 'var(--text-2)',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyAreaLabel"][ex.bodyArea]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: 'var(--text-2)',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movementPatternLabel"][ex.movementPattern]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: 'var(--text-2)',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$labels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equipmentTypeLabel"][ex.equipmentType]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `badge ${ex.active ? 'badge-active' : 'badge-inactive'}`,
                                                            children: ex.active ? 'Ativo' : 'Inativo'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, ex.id, true, {
                                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                                lineNumber: 304,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            exercise: selected,
                            currentUserId: userId,
                            isAdmin: isAdmin,
                            onEdit: openEdit,
                            onDeactivate: handleDeactivate,
                            onReactivate: handleReactivate,
                            onClose: ()=>setSelected(null)
                        }, void 0, false, {
                            fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/exercises/ExerciseLibrary.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ExerciseLibrary, "6OgRJ+jDZPt+jb92NfA/nhrXvlw=");
_c = ExerciseLibrary;
var _c;
__turbopack_context__.k.register(_c, "ExerciseLibrary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/biblioteca/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BibliotecaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseLibrary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/exercises/ExerciseLibrary.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BibliotecaPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "page-title",
                            children: "Biblioteca de Exercícios"
                        }, void 0, false, {
                            fileName: "[project]/src/app/biblioteca/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "page-subtitle",
                            children: [
                                "Catálogo global + exercícios privados",
                                user.role === 'ADMIN' && ' · Modo admin: use a seção Admin para gerenciar o catálogo global'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/biblioteca/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/biblioteca/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/biblioteca/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$exercises$2f$ExerciseLibrary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    userId: user.id,
                    isAdmin: false
                }, void 0, false, {
                    fileName: "[project]/src/app/biblioteca/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/biblioteca/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BibliotecaPage, "wcu15LqFo7VN7B41gOUPFXuvdlA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = BibliotecaPage;
var _c;
__turbopack_context__.k.register(_c, "BibliotecaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1g0jr2z._.js.map