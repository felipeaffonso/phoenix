'use client';

import { useState } from 'react';
import { movementPatternLabel, bodyAreaLabel, equipmentTypeLabel } from '@/lib/labels';
import type {
  Exercise,
  MovementPattern,
  BodyArea,
  EquipmentType,
  CreatePrivateExerciseInput,
} from '@/lib/types';

const MOVEMENT_PATTERNS = Object.keys(movementPatternLabel) as MovementPattern[];
const BODY_AREAS = Object.keys(bodyAreaLabel) as BodyArea[];
const EQUIPMENT_TYPES = Object.keys(equipmentTypeLabel) as EquipmentType[];

type Props = {
  initial?: Exercise;
  isAdmin?: boolean;
  onSave: (input: CreatePrivateExerciseInput) => Promise<void>;
  onCancel: () => void;
};

type FormErrors = Partial<Record<keyof CreatePrivateExerciseInput, string>>;

export default function ExerciseForm({ initial, isAdmin = false, onSave, onCancel }: Props) {
  const [name, setName] = useState(initial?.name ?? '');
  const [namePt, setNamePt] = useState(initial?.namePt ?? '');
  const [movementPattern, setMovementPattern] = useState<MovementPattern | ''>(
    initial?.movementPattern ?? '',
  );
  const [bodyArea, setBodyArea] = useState<BodyArea | ''>(initial?.bodyArea ?? '');
  const [equipmentType, setEquipmentType] = useState<EquipmentType | ''>(
    initial?.equipmentType ?? '',
  );
  const [safetyNotes, setSafetyNotes] = useState(initial?.defaultSafetyNotes ?? '');
  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!name.trim()) e.name = 'Nome é obrigatório.';
    else if (name.trim().length > 120) e.name = 'Máximo 120 caracteres.';
    if (namePt.trim().length > 160) e.namePt = 'Máximo 160 caracteres.';
    if (!movementPattern) e.movementPattern = 'Selecione um padrão de movimento.';
    if (!bodyArea) e.bodyArea = 'Selecione uma área do corpo.';
    if (!equipmentType) e.equipmentType = 'Selecione o equipamento.';
    if (safetyNotes.trim().length > 2000) e.defaultSafetyNotes = 'Máximo 2000 caracteres.';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
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
        movementPattern: movementPattern as MovementPattern,
        bodyArea: bodyArea as BodyArea,
        equipmentType: equipmentType as EquipmentType,
        defaultSafetyNotes: safetyNotes.trim() || undefined,
      });
    } catch (err) {
      setErrors({ name: String(err) });
    } finally {
      setSaving(false);
    }
  }

  const title = initial
    ? 'Editar exercício'
    : isAdmin
    ? 'Novo exercício global'
    : 'Novo exercício privado';

  return (
    <div className="form-overlay" onClick={(e) => e.target === e.currentTarget && onCancel()}>
      <div className="form-modal">
        <div className="form-modal-header">
          <div className="form-modal-title">{title}</div>
          <button className="btn-icon" onClick={onCancel} aria-label="Fechar">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-modal-body">
            {!isAdmin && !initial && (
              <div
                style={{
                  padding: '8px 12px',
                  background: 'var(--amber-bg)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 12,
                  color: 'var(--amber)',
                }}
              >
                Este exercício será privado e visível apenas para você.
              </div>
            )}

            <div className="form-field">
              <label className="form-label form-label-required">Nome do exercício</label>
              <input
                className={`form-input${errors.name ? ' error' : ''}`}
                type="text"
                placeholder="ex: Remada curvada com halteres"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                maxLength={120}
                autoFocus
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label className="form-label">Nome em português</label>
              <input
                className={`form-input${errors.namePt ? ' error' : ''}`}
                type="text"
                placeholder="Deixe vazio para usar o mesmo nome"
                value={namePt}
                onChange={(e) => {
                  setNamePt(e.target.value);
                  setErrors((prev) => ({ ...prev, namePt: undefined }));
                }}
                maxLength={160}
              />
              <span className="form-hint">Se vazio, o nome em inglês será usado.</span>
              {errors.namePt && <span className="form-error">{errors.namePt}</span>}
            </div>

            <div className="form-field">
              <label className="form-label form-label-required">Área do corpo</label>
              <select
                className={`form-select${errors.bodyArea ? ' error' : ''}`}
                value={bodyArea}
                onChange={(e) => {
                  setBodyArea(e.target.value as BodyArea);
                  setErrors((prev) => ({ ...prev, bodyArea: undefined }));
                }}
              >
                <option value="">Selecionar…</option>
                {BODY_AREAS.map((v) => (
                  <option key={v} value={v}>
                    {bodyAreaLabel[v]}
                  </option>
                ))}
              </select>
              {errors.bodyArea && <span className="form-error">{errors.bodyArea}</span>}
            </div>

            <div className="form-field">
              <label className="form-label form-label-required">Padrão de movimento</label>
              <select
                className={`form-select${errors.movementPattern ? ' error' : ''}`}
                value={movementPattern}
                onChange={(e) => {
                  setMovementPattern(e.target.value as MovementPattern);
                  setErrors((prev) => ({ ...prev, movementPattern: undefined }));
                }}
              >
                <option value="">Selecionar…</option>
                {MOVEMENT_PATTERNS.map((v) => (
                  <option key={v} value={v}>
                    {movementPatternLabel[v]}
                  </option>
                ))}
              </select>
              {errors.movementPattern && (
                <span className="form-error">{errors.movementPattern}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label form-label-required">Equipamento</label>
              <select
                className={`form-select${errors.equipmentType ? ' error' : ''}`}
                value={equipmentType}
                onChange={(e) => {
                  setEquipmentType(e.target.value as EquipmentType);
                  setErrors((prev) => ({ ...prev, equipmentType: undefined }));
                }}
              >
                <option value="">Selecionar…</option>
                {EQUIPMENT_TYPES.map((v) => (
                  <option key={v} value={v}>
                    {equipmentTypeLabel[v]}
                  </option>
                ))}
              </select>
              {errors.equipmentType && <span className="form-error">{errors.equipmentType}</span>}
            </div>

            <div className="form-field">
              <label className="form-label">Notas de segurança</label>
              <textarea
                className="form-textarea"
                placeholder="Restrições de execução, cuidados com lombar ou ombro…"
                value={safetyNotes}
                onChange={(e) => setSafetyNotes(e.target.value)}
                maxLength={2000}
              />
              {errors.defaultSafetyNotes && (
                <span className="form-error">{errors.defaultSafetyNotes}</span>
              )}
            </div>
          </div>

          <div className="form-modal-footer">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Salvando…' : initial ? 'Salvar alterações' : 'Criar exercício'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
