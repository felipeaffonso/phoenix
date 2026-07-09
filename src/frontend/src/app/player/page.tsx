'use client';

import { useState } from 'react';
import { MOCK_TEMPLATES } from '@/lib/mock/templates';

const TEMPLATE = MOCK_TEMPLATES.find((t) => t.name === 'Upper A') ?? MOCK_TEMPLATES[1];

type CompletedSet = {
  exerciseId: string;
  seriesOrder: number;
  reps: number | null;
  loadKg: number | null;
};

export default function PlayerPage() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [completedSets, setCompletedSets] = useState<CompletedSet[]>([]);
  const [repsInput, setRepsInput] = useState<string>('');
  const [loadInput, setLoadInput] = useState<string>('');

  const byGroup = TEMPLATE.exercises.reduce(
    (acc, ex) => {
      const g = ex.groupPosition;
      if (!acc[g]) acc[g] = [];
      acc[g].push(ex);
      return acc;
    },
    {} as Record<number, typeof TEMPLATE.exercises>,
  );
  const groups = Object.values(byGroup);

  const currentGroup = groups[groupIdx] ?? null;
  const ex = currentGroup?.[0];

  const seriesForEx = ex
    ? completedSets.filter((s) => s.exerciseId === ex.exerciseId)
    : [];

  const currentSeriesOrder = seriesForEx.length + 1;
  const targetSeries = ex?.series[seriesForEx.length];

  function markSet() {
    if (!ex || !targetSeries) return;
    setCompletedSets((prev) => [
      ...prev,
      {
        exerciseId: ex.exerciseId,
        seriesOrder: currentSeriesOrder,
        reps: repsInput ? Number(repsInput) : null,
        loadKg: loadInput ? Number(loadInput) : null,
      },
    ]);
    setRepsInput('');
    setLoadInput('');
    setTimerActive(true);
  }

  const isExerciseDone = ex && seriesForEx.length >= ex.series.length;

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Workout Player</div>
          <div className="page-subtitle">
            {TEMPLATE.name} · {TEMPLATE.dayLabel} · preview de protótipo
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary btn-sm" disabled>
            ← Anterior
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              if (groupIdx < groups.length - 1) {
                setGroupIdx((i) => i + 1);
                setTimerActive(false);
              }
            }}
            disabled={groupIdx >= groups.length - 1}
          >
            Próximo →
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="mock-notice">
          ⚠ Player em modo protótipo. Persistência de histórico não implementada.
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 4, background: 'var(--surface-2)', borderRadius: 2, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${((groupIdx + 1) / groups.length) * 100}%`,
                background: 'var(--accent)',
                borderRadius: 2,
                transition: 'width 0.3s',
              }}
            />
          </div>
          <span style={{ fontSize: 11, color: 'var(--text-3)', whiteSpace: 'nowrap' }}>
            {groupIdx + 1}/{groups.length} grupos
          </span>
        </div>

        {currentGroup && (
          <div className="player-layout">
            {/* Left: exercise + series */}
            <div>
              {currentGroup.map((ex, i) => (
                <div key={i} className="player-exercise-card" style={{ marginBottom: 12 }}>
                  <div className="player-exercise-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="player-exercise-name">{ex.exerciseNamePt}</div>
                      {currentGroup.length > 1 && (
                        <span className="badge badge-info">{ex.groupType}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 4 }}>
                      {ex.exerciseName}
                    </div>
                    {ex.executionNote && (
                      <details style={{ marginTop: 8 }}>
                        <summary style={{ fontSize: 11, color: 'var(--text-3)', cursor: 'pointer' }}>
                          Notas de execução
                        </summary>
                        <div className="player-exercise-note" style={{ marginTop: 6 }}>
                          {ex.executionNote}
                        </div>
                      </details>
                    )}
                  </div>

                  {/* Series header */}
                  <div className="player-series-header">
                    <div>#</div>
                    <div>Alvo</div>
                    <div>Carga (kg)</div>
                    <div>Reps</div>
                    <div></div>
                  </div>

                  {/* Completed series */}
                  {completedSets
                    .filter((s) => s.exerciseId === ex.exerciseId)
                    .map((s) => (
                      <div key={s.seriesOrder} className="player-series-row done">
                        <div style={{ color: 'var(--green)', fontSize: 11 }}>✓</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>
                          {ex.series[s.seriesOrder - 1]?.targetType === 'REPS'
                            ? `${ex.series[s.seriesOrder - 1]?.targetValue} reps`
                            : `${ex.series[s.seriesOrder - 1]?.targetValue}s`}
                        </div>
                        <div>{s.loadKg ?? '—'}</div>
                        <div>{s.reps ?? '—'}</div>
                        <div />
                      </div>
                    ))}

                  {/* Current series (first unfinished exercise) */}
                  {i === 0 && targetSeries && !isExerciseDone && (
                    <div className="player-series-row" style={{ background: 'var(--accent-bg)', borderLeft: '2px solid var(--accent)' }}>
                      <div style={{ fontWeight: 600, color: 'var(--accent)' }}>
                        {currentSeriesOrder}
                      </div>
                      <div style={{ fontSize: 11 }}>
                        {targetSeries.targetType === 'REPS'
                          ? `${targetSeries.targetValue} reps`
                          : targetSeries.targetType === 'TIME_SECONDS'
                          ? `${targetSeries.targetValue}s`
                          : 'Falha'}
                        {targetSeries.intensityMetric !== 'NONE' && (
                          <span style={{ color: 'var(--text-3)', marginLeft: 4 }}>
                            {targetSeries.intensityMetric} {targetSeries.intensityValue}
                          </span>
                        )}
                      </div>
                      <div>
                        <input
                          className="player-input"
                          type="number"
                          placeholder="kg"
                          value={loadInput}
                          onChange={(e) => setLoadInput(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          className="player-input"
                          type="number"
                          placeholder="reps"
                          value={repsInput}
                          onChange={(e) => setRepsInput(e.target.value)}
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary btn-sm" onClick={markSet}>
                          ✓
                        </button>
                      </div>
                    </div>
                  )}

                  {isExerciseDone && (
                    <div style={{ padding: '10px 16px', fontSize: 12, color: 'var(--green)' }}>
                      ✓ Exercício concluído
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: timer + pain notes */}
            <div className="player-sidebar">
              <div className="player-timer-card">
                <div className="timer-label">
                  {timerActive ? 'Descanso' : 'Próxima série'}
                </div>
                <div className="timer-display" style={{ color: timerActive ? 'var(--accent)' : 'var(--text-3)' }}>
                  {timerActive ? '01:30' : '—:——'}
                </div>
                <div className="timer-subtext">
                  {timerActive
                    ? 'Timer de descanso (placeholder)'
                    : 'Inicia após registrar a série'}
                </div>
                {timerActive && (
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: 10, width: '100%' }}
                    onClick={() => setTimerActive(false)}
                  >
                    Pular descanso
                  </button>
                )}
              </div>

              {/* Target info */}
              {targetSeries && (
                <div className="card">
                  <div className="card-body">
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                      Série atual
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Alvo</span>
                      <span className="detail-value">
                        {targetSeries.targetType === 'REPS'
                          ? `${targetSeries.targetValue} reps`
                          : `${targetSeries.targetValue}s`}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Intensidade</span>
                      <span className="detail-value">
                        {targetSeries.intensityMetric === 'NONE'
                          ? '—'
                          : `${targetSeries.intensityMetric} ${targetSeries.intensityValue}`}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Descanso</span>
                      <span className="detail-value">{targetSeries.restSeconds}s</span>
                    </div>
                    <div className="detail-row" style={{ border: 'none' }}>
                      <span className="detail-label">Carga sugerida</span>
                      <span className="detail-value">
                        {targetSeries.suggestedLoadKg ? `${targetSeries.suggestedLoadKg} kg` : '—'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pain-note-card">
                <div className="pain-note-title">
                  ⚠ Dor / Instabilidade
                </div>
                <div className="pain-buttons">
                  {['Dor lombar', 'Dor no ombro', 'Instabilidade', 'Dor no joelho', 'Outro'].map(
                    (label) => (
                      <button
                        key={label}
                        className="pain-btn"
                        onClick={() => alert(`Nota rápida: "${label}" — não implementado`)}
                      >
                        {label}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
