'use client';

import { movementPatternLabel, bodyAreaLabel, equipmentTypeLabel } from '@/lib/labels';
import type { Exercise } from '@/lib/types';

type Props = {
  exercise: Exercise;
  currentUserId: string;
  isAdmin: boolean;
  onEdit?: (ex: Exercise) => void;
  onDeactivate?: (ex: Exercise) => void;
  onReactivate?: (ex: Exercise) => void;
  onClose: () => void;
};

export default function ExerciseDetail({
  exercise,
  currentUserId,
  isAdmin,
  onEdit,
  onDeactivate,
  onReactivate,
  onClose,
}: Props) {
  const isOwned = exercise.scope === 'USER' && exercise.ownerUserId === currentUserId;
  const canEdit = isOwned || (isAdmin && exercise.scope === 'GLOBAL');
  const canDeactivate = isOwned || (isAdmin && exercise.scope === 'GLOBAL');

  return (
    <div className="detail-card">
      <div className="detail-header">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className={`badge ${exercise.scope === 'GLOBAL' ? 'badge-global' : 'badge-user'}`}>
              {exercise.scope === 'GLOBAL' ? '🌐 Global' : '🔒 Privado'}
            </span>
            <span className={`badge ${exercise.active ? 'badge-active' : 'badge-inactive'}`}>
              {exercise.active ? 'Ativo' : 'Inativo'}
            </span>
          </div>
          <div className="detail-title">{exercise.namePt}</div>
          <div className="detail-subtitle">{exercise.name}</div>
        </div>
        <button className="btn-icon" onClick={onClose} aria-label="Fechar painel">
          ✕
        </button>
      </div>

      <div className="detail-body">
        <div className="detail-row">
          <span className="detail-label">Área do corpo</span>
          <span className="detail-value">{bodyAreaLabel[exercise.bodyArea]}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Padrão de movimento</span>
          <span className="detail-value" style={{ textAlign: 'right', maxWidth: 160 }}>
            {movementPatternLabel[exercise.movementPattern]}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Equipamento</span>
          <span className="detail-value">{equipmentTypeLabel[exercise.equipmentType]}</span>
        </div>
        <div className="detail-row" style={{ border: 'none' }}>
          <span className="detail-label">Escopo</span>
          <span className="detail-value">
            {exercise.scope === 'GLOBAL' ? 'Catálogo global' : 'Exercício privado'}
          </span>
        </div>

        {exercise.defaultSafetyNotes && (
          <div className="detail-notes" style={{ marginTop: 12 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: 'var(--text-3)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 5,
              }}
            >
              Notas de segurança
            </div>
            {exercise.defaultSafetyNotes}
          </div>
        )}
      </div>

      {(canEdit || canDeactivate) && (
        <div className="detail-actions">
          {canEdit && onEdit && (
            <button className="btn btn-secondary btn-sm" onClick={() => onEdit(exercise)}>
              ✏ Editar
            </button>
          )}
          {canDeactivate && exercise.active && onDeactivate && (
            <button className="btn btn-danger btn-sm" onClick={() => onDeactivate(exercise)}>
              Desativar
            </button>
          )}
          {canDeactivate && !exercise.active && onReactivate && (
            <button className="btn btn-secondary btn-sm" onClick={() => onReactivate(exercise)}>
              Reativar
            </button>
          )}
        </div>
      )}

      {!canEdit && !canDeactivate && exercise.scope === 'USER' && (
        <div
          style={{
            padding: '10px 16px',
            fontSize: 11,
            color: 'var(--text-3)',
            borderTop: '1px solid var(--border)',
          }}
        >
          Exercício privado de outro atleta — sem permissão de edição.
        </div>
      )}
    </div>
  );
}
