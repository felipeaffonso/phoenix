'use client';

import { useState } from 'react';
import { MOCK_TEMPLATES } from '@/lib/mock/templates';
import type { WorkoutTemplate, PrescribedSeries } from '@/lib/types';

function seriesSummary(series: PrescribedSeries[]): string {
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

function TemplateCard({
  template,
  selected,
  onClick,
}: {
  template: WorkoutTemplate;
  selected: boolean;
  onClick: () => void;
}) {
  // Group exercises by groupPosition
  const byGroup = template.exercises.reduce(
    (acc, ex) => {
      const g = ex.groupPosition;
      if (!acc[g]) acc[g] = [];
      acc[g].push(ex);
      return acc;
    },
    {} as Record<number, typeof template.exercises>,
  );
  const groups = Object.values(byGroup);

  return (
    <div className={`template-card${selected ? ' selected' : ''}`} onClick={onClick}>
      <div className="template-card-header">
        <div>
          <div className="template-day-pill">{template.dayLabel}</div>
          <div className="template-name">{template.name}</div>
          <div className="template-focus">{template.focus}</div>
        </div>
        <span className="badge badge-info">{groups.length} grupos</span>
      </div>
      <div className="template-card-body">
        <ul className="template-exercise-list">
          {groups.slice(0, 5).map((group, i) => {
            const ex = group[0];
            const total = group.length;
            return (
              <li key={i} className="template-exercise-item">
                <span style={{ color: 'var(--text-3)', fontSize: 10 }}>{i + 1}.</span>
                <span className="truncate" style={{ flex: 1 }}>
                  {total > 1
                    ? group.map((e) => e.exerciseNamePt).join(' + ')
                    : ex.exerciseNamePt}
                </span>
                {ex.series.length > 0 && (
                  <span className="template-exercise-sets">{seriesSummary(ex.series)}</span>
                )}
              </li>
            );
          })}
          {groups.length > 5 && (
            <li style={{ fontSize: 11, color: 'var(--text-3)', paddingTop: 2 }}>
              +{groups.length - 5} grupos
            </li>
          )}
        </ul>
        <div className="template-preview-note">
          🔒 Execução e edição não implementadas neste protótipo
        </div>
      </div>
    </div>
  );
}

function TemplateDetail({ template }: { template: WorkoutTemplate }) {
  const byGroup = template.exercises.reduce(
    (acc, ex) => {
      const g = ex.groupPosition;
      if (!acc[g]) acc[g] = [];
      acc[g].push(ex);
      return acc;
    },
    {} as Record<number, typeof template.exercises>,
  );
  const groups = Object.values(byGroup);

  return (
    <div className="detail-card" style={{ position: 'sticky', top: 0 }}>
      <div className="detail-header">
        <div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
            {template.dayLabel}
          </div>
          <div className="detail-title">{template.name}</div>
          <div className="detail-subtitle">{template.focus}</div>
        </div>
      </div>

      <div style={{ maxHeight: 'calc(100vh - 240px)', overflowY: 'auto' }}>
        {groups.map((group, gi) => {
          const isMulti = group.length > 1;
          return (
            <div key={gi} style={{ borderBottom: '1px solid var(--border)', padding: '10px 16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 8,
              }}>
                <span style={{ fontSize: 10, color: 'var(--text-3)', background: 'var(--surface-2)', padding: '2px 6px', borderRadius: 3 }}>
                  {gi + 1}
                </span>
                {isMulti && (
                  <span className="badge badge-info">{group[0].groupType}</span>
                )}
              </div>

              {group.map((ex, ei) => (
                <div key={ei} style={{ marginBottom: ei < group.length - 1 ? 8 : 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)' }}>
                    {ex.exerciseNamePt}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 4 }}>
                    {ex.exerciseName}
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {ex.series.map((s, si) => (
                      <span key={si} className="badge badge-info">
                        {s.targetType === 'REPS'
                          ? `${s.targetValue} reps`
                          : s.targetType === 'TIME_SECONDS'
                          ? `${s.targetValue}s`
                          : 'falha'}
                        {s.intensityMetric !== 'NONE' && ` · ${s.intensityMetric} ${s.intensityValue}`}
                      </span>
                    ))}
                  </div>
                  {ex.executionNote && (
                    <div style={{
                      marginTop: 6,
                      padding: '6px 8px',
                      background: 'var(--surface-2)',
                      borderRadius: 4,
                      fontSize: 11,
                      color: 'var(--text-2)',
                      whiteSpace: 'pre-line',
                    }}>
                      {ex.executionNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TreinosPage() {
  const [selected, setSelected] = useState<WorkoutTemplate | null>(null);

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Templates de Treino</div>
          <div className="page-subtitle">
            {MOCK_TEMPLATES.length} templates ativos · visualização de protótipo
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="mock-notice">
          ⚠ Templates em modo de leitura. Edição e execução serão implementadas com o backend.
        </div>

        <div className="library-layout">
          <div className="library-list">
            <div className="template-grid">
              {MOCK_TEMPLATES.map((t) => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  selected={selected?.id === t.id}
                  onClick={() => setSelected(selected?.id === t.id ? null : t)}
                />
              ))}
            </div>
          </div>

          {selected && (
            <div className="detail-panel">
              <TemplateDetail template={selected} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
