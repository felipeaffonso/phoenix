'use client';

import { useState, useEffect } from 'react';
import { MOCK_TEMPLATES } from '@/lib/mock/templates';
import { useRestTimer, requestNotificationPermission, formatTime } from '@/lib/useRestTimer';

const TEMPLATE = MOCK_TEMPLATES.find((t) => t.name === 'Upper A') ?? MOCK_TEMPLATES[1];

type CompletedSet = {
  exerciseId: string;
  seriesOrder: number;
  reps: number | null;
  loadKg: number | null;
};

type EditingSet = {
  exerciseId: string;
  seriesOrder: number;
  load: string;
  reps: string;
};

export default function PlayerPage() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [completedSets, setCompletedSets] = useState<CompletedSet[]>([]);
  const [repsInput, setRepsInput] = useState<string>('');
  const [loadInput, setLoadInput] = useState<string>('');
  const [notifStatus, setNotifStatus] = useState<'unknown' | 'granted' | 'denied'>('unknown');
  const [editingSet, setEditingSet] = useState<EditingSet | null>(null);

  const timer = useRestTimer();

  // Check notification permission state on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotifStatus(
        Notification.permission === 'granted'
          ? 'granted'
          : Notification.permission === 'denied'
          ? 'denied'
          : 'unknown',
      );
    }
  }, []);

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
  const isExerciseDone = ex ? seriesForEx.length >= ex.series.length : false;

  async function handleMarkSet() {
    if (!ex || !targetSeries) return;

    // Request notification permission on first timer start (least disruptive moment)
    if (notifStatus === 'unknown') {
      const granted = await requestNotificationPermission();
      setNotifStatus(granted ? 'granted' : 'denied');
    }

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

    // Start rest countdown
    const restSecs = targetSeries.restSeconds ?? 90;
    timer.start(restSecs, ex.exerciseNamePt);
  }

  function handleNextGroup() {
    if (groupIdx < groups.length - 1) {
      setGroupIdx((i) => i + 1);
      timer.skip();
    }
  }

  function handlePrevGroup() {
    if (groupIdx > 0) {
      setGroupIdx((i) => i - 1);
      timer.skip();
    }
  }

  function startEditSet(s: CompletedSet) {
    setEditingSet({
      exerciseId: s.exerciseId,
      seriesOrder: s.seriesOrder,
      load: s.loadKg != null ? String(s.loadKg) : '',
      reps: s.reps != null ? String(s.reps) : '',
    });
  }

  function saveEditSet() {
    if (!editingSet) return;
    setCompletedSets((prev) =>
      prev.map((s) =>
        s.exerciseId === editingSet.exerciseId && s.seriesOrder === editingSet.seriesOrder
          ? {
              ...s,
              loadKg: editingSet.load !== '' ? Number(editingSet.load) : null,
              reps: editingSet.reps !== '' ? Number(editingSet.reps) : null,
            }
          : s,
      ),
    );
    setEditingSet(null);
  }

  function cancelEditSet() {
    setEditingSet(null);
  }

  const isEditing = (s: CompletedSet) =>
    editingSet?.exerciseId === s.exerciseId && editingSet?.seriesOrder === s.seriesOrder;

  const timerColor =
    timer.isActive && timer.remaining !== null
      ? timer.remaining <= 10
        ? 'var(--red)'
        : timer.remaining <= 30
        ? 'var(--amber)'
        : 'var(--accent)'
      : 'var(--text-3)';

  const timerDisplay =
    timer.remaining !== null ? formatTime(timer.remaining) : '—:——';

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Workout Player</div>
          <div className="page-subtitle" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span>{TEMPLATE.name} · {TEMPLATE.dayLabel}</span>
            {/* Notification permission prompt */}
            {notifStatus === 'unknown' && (
              <button
                className="btn btn-ghost btn-sm"
                style={{ fontSize: 10, padding: '2px 8px', borderColor: 'var(--border)' }}
                onClick={async () => {
                  const ok = await requestNotificationPermission();
                  setNotifStatus(ok ? 'granted' : 'denied');
                }}
              >
                🔔 Ativar notificações
              </button>
            )}
            {notifStatus === 'granted' && (
              <span style={{ fontSize: 10, color: 'var(--green)' }}>🔔 Notificações ativas</span>
            )}
            {notifStatus === 'denied' && (
              <span style={{ fontSize: 10, color: 'var(--text-3)' }}>🔕 Notificações bloqueadas</span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handlePrevGroup}
            disabled={groupIdx === 0}
          >
            ← Anterior
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleNextGroup}
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

        {/* Progress bar */}
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
            {/* ── Left: exercise cards + series ── */}
            <div className="player-main">
              {currentGroup.map((item, i) => {
                const setsForItem = completedSets.filter((s) => s.exerciseId === item.exerciseId);
                const itemCurrentOrder = setsForItem.length + 1;
                const itemTargetSeries = item.series[setsForItem.length];
                const itemDone = setsForItem.length >= item.series.length;

                return (
                  <div key={i} className="player-exercise-card" style={{ marginBottom: 12 }}>
                    <div className="player-exercise-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <div className="player-exercise-name">{item.exerciseNamePt}</div>
                        {currentGroup.length > 1 && (
                          <span className="badge badge-info">{item.groupType}</span>
                        )}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 4 }}>
                        {item.exerciseName}
                      </div>
                      {item.executionNote && (
                        <details style={{ marginTop: 8 }}>
                          <summary style={{ fontSize: 11, color: 'var(--text-3)', cursor: 'pointer' }}>
                            Notas de execução
                          </summary>
                          <div className="player-exercise-note" style={{ marginTop: 6 }}>
                            {item.executionNote}
                          </div>
                        </details>
                      )}
                    </div>

                    {/* Series table (scrollable on mobile) */}
                    <div style={{ overflowX: 'auto' }}>
                      {/* Header */}
                      <div className="player-series-header">
                        <div>#</div>
                        <div>Alvo</div>
                        <div>Carga (kg)</div>
                        <div>Reps</div>
                        <div />
                      </div>

                      {/* Completed series */}
                      {setsForItem.map((s) => {
                        const editing = isEditing(s);
                        const target = item.series[s.seriesOrder - 1];
                        const targetLabel = target?.targetType === 'REPS'
                          ? `${target.targetValue} reps`
                          : `${target?.targetValue}s`;
                        const missingData = s.loadKg == null || s.reps == null;

                        if (editing) {
                          return (
                            <div
                              key={s.seriesOrder}
                              className="player-series-row"
                              style={{ background: 'var(--surface-2)', borderLeft: '2px solid var(--amber)' }}
                            >
                              <div style={{ color: 'var(--amber)', fontSize: 13 }}>✏</div>
                              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{targetLabel}</div>
                              <div>
                                <input
                                  className="player-input"
                                  type="number"
                                  inputMode="decimal"
                                  placeholder="kg"
                                  autoFocus
                                  value={editingSet!.load}
                                  onChange={(e) =>
                                    setEditingSet((prev) => prev && { ...prev, load: e.target.value })
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') saveEditSet();
                                    if (e.key === 'Escape') cancelEditSet();
                                  }}
                                />
                              </div>
                              <div>
                                <input
                                  className="player-input"
                                  type="number"
                                  inputMode="numeric"
                                  placeholder="reps"
                                  value={editingSet!.reps}
                                  onChange={(e) =>
                                    setEditingSet((prev) => prev && { ...prev, reps: e.target.value })
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') saveEditSet();
                                    if (e.key === 'Escape') cancelEditSet();
                                  }}
                                />
                              </div>
                              <div style={{ display: 'flex', gap: 3 }}>
                                <button
                                  className="btn-icon"
                                  title="Salvar"
                                  onClick={saveEditSet}
                                  style={{ color: 'var(--green)', fontSize: 14 }}
                                >
                                  ✓
                                </button>
                                <button
                                  className="btn-icon"
                                  title="Cancelar"
                                  onClick={cancelEditSet}
                                  style={{ fontSize: 12 }}
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div key={s.seriesOrder} className="player-series-row done">
                            <div style={{ color: 'var(--green)', fontSize: 11 }}>✓</div>
                            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{targetLabel}</div>
                            <div style={{ color: missingData ? 'var(--amber)' : undefined }}>
                              {s.loadKg ?? <span style={{ color: 'var(--amber)', fontWeight: 600 }}>—</span>}
                            </div>
                            <div>
                              {s.reps ?? <span style={{ color: 'var(--amber)', fontWeight: 600 }}>—</span>}
                            </div>
                            <div>
                              <button
                                className="btn-icon"
                                title="Editar série"
                                onClick={() => startEditSet(s)}
                                style={{ opacity: 0.6 }}
                              >
                                ✏
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {/* Active row — first unfinished exercise in the group */}
                      {i === 0 && itemTargetSeries && !itemDone && (
                        <div
                          className="player-series-row"
                          style={{
                            background: 'var(--accent-bg)',
                            borderLeft: '2px solid var(--accent)',
                          }}
                        >
                          <div style={{ fontWeight: 600, color: 'var(--accent)' }}>
                            {itemCurrentOrder}
                          </div>
                          <div style={{ fontSize: 11 }}>
                            {itemTargetSeries.targetType === 'REPS'
                              ? `${itemTargetSeries.targetValue} reps`
                              : itemTargetSeries.targetType === 'TIME_SECONDS'
                              ? `${itemTargetSeries.targetValue}s`
                              : 'Falha'}
                            {itemTargetSeries.intensityMetric !== 'NONE' && (
                              <span style={{ color: 'var(--text-3)', marginLeft: 4 }}>
                                {itemTargetSeries.intensityMetric} {itemTargetSeries.intensityValue}
                              </span>
                            )}
                          </div>
                          <div>
                            <input
                              className="player-input"
                              type="number"
                              inputMode="decimal"
                              placeholder="kg"
                              value={loadInput}
                              onChange={(e) => setLoadInput(e.target.value)}
                            />
                          </div>
                          <div>
                            <input
                              className="player-input"
                              type="number"
                              inputMode="numeric"
                              placeholder="reps"
                              value={repsInput}
                              onChange={(e) => setRepsInput(e.target.value)}
                            />
                          </div>
                          <div>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={handleMarkSet}
                            >
                              ✓
                            </button>
                          </div>
                        </div>
                      )}

                      {itemDone && (
                        <div style={{ padding: '10px 16px', fontSize: 12, color: 'var(--green)' }}>
                          ✓ Exercício concluído
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Right (mobile: top): timer + series info + pain notes ── */}
            <div className="player-sidebar">
              {/* Rest timer */}
              <div className="player-timer-card">
                <div className="timer-label">
                  {timer.isActive ? 'Descanso' : timer.remaining === 0 ? 'Pronto!' : 'Próxima série'}
                </div>
                <div className="timer-display" style={{ color: timerColor }}>
                  {timerDisplay}
                </div>
                <div className="timer-subtext">
                  {timer.isActive
                    ? 'Descanse e prepare-se'
                    : timer.remaining === 0
                    ? 'Hora da próxima série ⚡'
                    : 'Inicia após registrar a série'}
                </div>
                {timer.isActive && (
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: 10, width: '100%' }}
                    onClick={timer.skip}
                  >
                    Pular descanso
                  </button>
                )}
                {timer.remaining === 0 && !timer.isActive && (
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 10, width: '100%' }}
                    onClick={timer.skip}
                  >
                    Entendido ✓
                  </button>
                )}
              </div>

              {/* Current series target info */}
              {targetSeries && (
                <div className="card">
                  <div className="card-body">
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: 'var(--text-3)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: 8,
                      }}
                    >
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
                        {targetSeries.suggestedLoadKg
                          ? `${targetSeries.suggestedLoadKg} kg`
                          : '—'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Pain / instability quick notes */}
              <div className="pain-note-card">
                <div className="pain-note-title">⚠ Dor / Instabilidade</div>
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
