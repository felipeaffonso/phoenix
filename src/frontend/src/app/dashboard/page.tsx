'use client';

import { useApp } from '@/contexts/AppContext';

const MOCK_HISTORY = [
  { id: 1, name: 'Upper A', date: '08 jul 2026', duration: '58 min', exercises: 6 },
  { id: 2, name: 'Lower A', date: '07 jul 2026', duration: '52 min', exercises: 6 },
  { id: 3, name: 'Recovery + Cardio', date: '06 jul 2026', duration: '45 min', exercises: 2 },
  { id: 4, name: 'Upper B', date: '05 jul 2026', duration: '55 min', exercises: 6 },
  { id: 5, name: 'Lower B', date: '04 jul 2026', duration: '50 min', exercises: 6 },
];

const NEXT_WORKOUT = {
  name: 'Shoulders + Arms',
  day: 'Domingo',
  focus: 'Deltoides, bíceps e tríceps',
};

export default function DashboardPage() {
  const { user } = useApp();

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Dashboard</div>
          <div className="page-subtitle">
            Bem-vindo, {user.displayName}. Semana 28 · Julho 2026
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="mock-notice">
          ⚠ Esta página usa dados simulados. Persistência real será conectada ao backend.
        </div>

        {/* Stats */}
        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="stat-label">Treinos esta semana</div>
            <div className="stat-value">5</div>
            <div className="stat-sub">Meta: 6 / semana</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Volume total (semana)</div>
            <div className="stat-value">—</div>
            <div className="stat-sub">Aguardando dados do player</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Sequência atual</div>
            <div className="stat-value">12</div>
            <div className="stat-sub">dias consecutivos</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Exercícios no catálogo</div>
            <div className="stat-value">27</div>
            <div className="stat-sub">global + privados</div>
          </div>
        </div>

        {/* Next workout */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: 8,
            }}
          >
            Próximo treino
          </div>
          <div className="card">
            <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {NEXT_WORKOUT.day}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>
                  {NEXT_WORKOUT.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 3 }}>
                  {NEXT_WORKOUT.focus}
                </div>
              </div>
              <a
                href="/player"
                className="btn btn-primary"
                style={{ flexShrink: 0 }}
              >
                ▶ Iniciar (preview)
              </a>
            </div>
          </div>
        </div>

        {/* Recent history */}
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: 8,
            }}
          >
            Histórico recente
          </div>
          <div className="card">
            <div className="card-body">
              {MOCK_HISTORY.map((session) => (
                <div key={session.id} className="history-item">
                  <div className="history-dot" />
                  <div style={{ flex: 1 }}>
                    <div className="history-name">{session.name}</div>
                    <div className="history-meta">
                      {session.date} · {session.duration} · {session.exercises} exercícios
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
