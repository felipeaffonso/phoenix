'use client';

const MOCK_HISTORY = [
  {
    id: 1,
    name: 'Upper A',
    date: '08/07/2026',
    duration: '58 min',
    exercises: [
      { name: 'Supino na máquina / Chest press', sets: 3, volume: '3×10 @ 70kg' },
      { name: 'Remada sentada no cabo', sets: 3, volume: '3×12 @ 55kg' },
      { name: 'Supino inclinado na máquina', sets: 3, volume: '3×10 @ 55kg' },
      { name: 'Puxada alta aberta', sets: 3, volume: '3×10 @ 60kg' },
      { name: 'Elevação lateral na máquina', sets: 3, volume: '3×12 @ 15kg' },
      { name: 'Tríceps polia barra reta', sets: 3, volume: '3×12 @ 30kg' },
    ],
  },
  {
    id: 2,
    name: 'Lower A',
    date: '07/07/2026',
    duration: '52 min',
    exercises: [
      { name: 'Cadeira extensora', sets: 4, volume: '4×12 @ 55kg' },
      { name: 'Mesa flexora sentada', sets: 4, volume: '4×12 @ 50kg' },
      { name: 'Elevação pélvica / Hip Thrust', sets: 4, volume: '4×10 @ 80kg' },
      { name: 'Afundo búlgaro', sets: 3, volume: '3×10/perna @ 16kg' },
      { name: 'Panturrilha em pé', sets: 4, volume: '4×15 @ 40kg' },
      { name: 'Abdominal no cabo', sets: 3, volume: '3×15 @ 25kg' },
    ],
  },
  {
    id: 3,
    name: 'Recovery + Cardio',
    date: '06/07/2026',
    duration: '45 min',
    exercises: [
      { name: 'Transport / Elíptico', sets: 1, volume: '40 min · Zona 2' },
      { name: 'Mobilidade leve', sets: 1, volume: '10 min' },
    ],
  },
];

export default function HistoricoPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Histórico de Treinos</div>
          <div className="page-subtitle">Visualização de protótipo — dados simulados</div>
        </div>
      </div>

      <div className="page-content">
        <div className="mock-notice">
          ⚠ Histórico simulado. Persistência real será conectada ao player e ao backend.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {MOCK_HISTORY.map((session) => (
            <div key={session.id} className="card">
              <div
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                    {session.name}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
                    {session.date} · {session.duration} · {session.exercises.length} exercícios
                  </div>
                </div>
                <span className="badge badge-active">Concluído</span>
              </div>

              <div className="card-body">
                <table className="data-table" style={{ fontSize: 12 }}>
                  <thead>
                    <tr>
                      <th>Exercício</th>
                      <th>Séries</th>
                      <th>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {session.exercises.map((ex, i) => (
                      <tr key={i} style={{ cursor: 'default' }}>
                        <td>{ex.name}</td>
                        <td style={{ color: 'var(--text-3)' }}>{ex.sets}</td>
                        <td style={{ color: 'var(--text-2)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                          {ex.volume}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
