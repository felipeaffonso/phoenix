'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  listAllExercisesIncludingInactive,
  createPrivateExercise,
  updatePrivateExercise,
  deactivatePrivateExercise,
  reactivatePrivateExercise,
} from '@/lib/adapters/exercises';
import {
  movementPatternLabel,
  bodyAreaLabel,
  equipmentTypeLabel,
} from '@/lib/labels';
import type {
  Exercise,
  ExerciseScope,
  MovementPattern,
  BodyArea,
  EquipmentType,
  CreatePrivateExerciseInput,
} from '@/lib/types';
import ExerciseForm from './ExerciseForm';
import ExerciseDetail from './ExerciseDetail';

const ALL = '' as const;

type Filters = {
  search: string;
  showInactive: boolean;
  scope: ExerciseScope | '';
  bodyArea: BodyArea | '';
  movementPattern: MovementPattern | '';
  equipmentType: EquipmentType | '';
};

const DEFAULT_FILTERS: Filters = {
  search: '',
  showInactive: false,
  scope: ALL,
  bodyArea: ALL,
  movementPattern: ALL,
  equipmentType: ALL,
};

type Props = {
  userId: string;
  isAdmin: boolean;
};

export default function ExerciseLibrary({ userId, isAdmin }: Props) {
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const data = await listAllExercisesIncludingInactive({ userId });
    setAllExercises(data);
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    reload();
  }, [reload]);

  // Apply filters client-side for instant feedback
  const filtered = allExercises.filter((ex) => {
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

  const hasActiveFilters =
    filters.search ||
    filters.showInactive ||
    filters.scope ||
    filters.bodyArea ||
    filters.movementPattern ||
    filters.equipmentType;

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  // ── Write actions ──────────────────────────────────────────────────────────

  async function handleCreate(input: CreatePrivateExerciseInput) {
    await createPrivateExercise(input, userId);
    await reload();
    setShowForm(false);
    setEditingExercise(null);
  }

  async function handleEdit(input: CreatePrivateExerciseInput) {
    if (!editingExercise) return;
    const updated = await updatePrivateExercise(editingExercise.id, input, userId);
    setSelected(updated);
    await reload();
    setShowForm(false);
    setEditingExercise(null);
  }

  async function handleDeactivate(ex: Exercise) {
    if (!confirm(`Desativar "${ex.namePt}"? O exercício permanecerá no histórico.`)) return;
    const updated = await deactivatePrivateExercise(ex.id, userId);
    setSelected(updated);
    await reload();
  }

  async function handleReactivate(ex: Exercise) {
    const updated = await reactivatePrivateExercise(ex.id, userId);
    setSelected(updated);
    await reload();
  }

  function openEdit(ex: Exercise) {
    setEditingExercise(ex);
    setShowForm(true);
  }

  function openCreate() {
    setEditingExercise(null);
    setShowForm(true);
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  // Collect unique values for filter dropdowns (from current data)
  const uniqueBodyAreas = [...new Set(allExercises.map((e) => e.bodyArea))].sort();
  const uniquePatterns = [...new Set(allExercises.map((e) => e.movementPattern))].sort();
  const uniqueEquipment = [...new Set(allExercises.map((e) => e.equipmentType))].sort();

  return (
    <>
      {/* ── Form modal ── */}
      {showForm && (
        <ExerciseForm
          initial={editingExercise ?? undefined}
          isAdmin={isAdmin}
          onSave={editingExercise ? handleEdit : handleCreate}
          onCancel={() => {
            setShowForm(false);
            setEditingExercise(null);
          }}
        />
      )}

      {/* ── Filter bar ── */}
      <div className="filter-bar">
        <div className="search-input-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Buscar exercício…"
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
          />
        </div>

        <button
          className={`filter-toggle${filters.showInactive ? ' active' : ''}`}
          onClick={() => setFilters((f) => ({ ...f, showInactive: !f.showInactive }))}
        >
          {filters.showInactive ? '◉' : '○'} Inativos
        </button>

        <select
          className="filter-select"
          value={filters.scope}
          onChange={(e) => setFilters((f) => ({ ...f, scope: e.target.value as ExerciseScope | '' }))}
        >
          <option value="">Escopo: todos</option>
          <option value="GLOBAL">🌐 Global</option>
          <option value="USER">🔒 Privado</option>
        </select>

        <select
          className="filter-select"
          value={filters.bodyArea}
          onChange={(e) => setFilters((f) => ({ ...f, bodyArea: e.target.value as BodyArea | '' }))}
        >
          <option value="">Área: todas</option>
          {uniqueBodyAreas.map((v) => (
            <option key={v} value={v}>
              {bodyAreaLabel[v]}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={filters.movementPattern}
          onChange={(e) =>
            setFilters((f) => ({ ...f, movementPattern: e.target.value as MovementPattern | '' }))
          }
        >
          <option value="">Padrão: todos</option>
          {uniquePatterns.map((v) => (
            <option key={v} value={v}>
              {movementPatternLabel[v]}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={filters.equipmentType}
          onChange={(e) =>
            setFilters((f) => ({ ...f, equipmentType: e.target.value as EquipmentType | '' }))
          }
        >
          <option value="">Equip.: todos</option>
          {uniqueEquipment.map((v) => (
            <option key={v} value={v}>
              {equipmentTypeLabel[v]}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button className="filter-reset" onClick={resetFilters}>
            ✕ Limpar
          </button>
        )}
      </div>

      {/* ── Results count ── */}
      <div
        style={{
          fontSize: 11,
          color: 'var(--text-3)',
          marginBottom: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>
          {loading ? 'Carregando…' : `${filtered.length} exercício${filtered.length !== 1 ? 's' : ''}`}
          {hasActiveFilters ? ' (filtrado)' : ''}
        </span>
        {!isAdmin && (
          <button className="btn btn-primary btn-sm" onClick={openCreate}>
            + Novo exercício privado
          </button>
        )}
      </div>

      {/* ── Main layout: table + detail ── */}
      <div className="library-layout">
        <div className="library-list">
          {filtered.length === 0 ? (
            <div className="table-wrap">
              <div className="empty-state">
                <div className="empty-state-icon">◈</div>
                <div className="empty-state-title">
                  {loading ? 'Carregando exercícios…' : 'Nenhum exercício encontrado'}
                </div>
                <div className="empty-state-body">
                  {!loading && hasActiveFilters
                    ? 'Tente ajustar os filtros ou limpar a busca.'
                    : !loading && !isAdmin
                    ? 'Crie seu primeiro exercício privado clicando no botão acima.'
                    : ''}
                </div>
                {!loading && hasActiveFilters && (
                  <button className="btn btn-secondary btn-sm" onClick={resetFilters}>
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: 72 }}>Escopo</th>
                    <th>Nome</th>
                    <th>Área</th>
                    <th>Padrão</th>
                    <th>Equipamento</th>
                    <th style={{ width: 60 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((ex) => {
                    const isSelected = selected?.id === ex.id;
                    const isOwned = ex.scope === 'USER' && ex.ownerUserId === userId;
                    return (
                      <tr
                        key={ex.id}
                        className={[
                          isSelected ? 'row-selected' : '',
                          !ex.active ? 'row-inactive' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => setSelected(isSelected ? null : ex)}
                      >
                        <td>
                          <span
                            className={`badge ${ex.scope === 'GLOBAL' ? 'badge-global' : 'badge-user'}`}
                          >
                            {ex.scope === 'GLOBAL' ? '🌐' : isOwned ? '🔒' : '👤'}
                          </span>
                        </td>
                        <td>
                          <div className="cell-name-stack">
                            <span className="cell-name-en truncate" style={{ maxWidth: 200 }}>
                              {ex.name}
                            </span>
                            <span className="cell-name-pt truncate" style={{ maxWidth: 200 }}>
                              {ex.namePt}
                            </span>
                          </div>
                        </td>
                        <td style={{ color: 'var(--text-2)', whiteSpace: 'nowrap' }}>
                          {bodyAreaLabel[ex.bodyArea]}
                        </td>
                        <td style={{ color: 'var(--text-2)', whiteSpace: 'nowrap' }}>
                          {movementPatternLabel[ex.movementPattern]}
                        </td>
                        <td style={{ color: 'var(--text-2)', whiteSpace: 'nowrap' }}>
                          {equipmentTypeLabel[ex.equipmentType]}
                        </td>
                        <td>
                          <span className={`badge ${ex.active ? 'badge-active' : 'badge-inactive'}`}>
                            {ex.active ? 'Ativo' : 'Inativo'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── Detail panel ── */}
        {selected && (
          <div className="detail-panel">
            <ExerciseDetail
              exercise={selected}
              currentUserId={userId}
              isAdmin={isAdmin}
              onEdit={openEdit}
              onDeactivate={handleDeactivate}
              onReactivate={handleReactivate}
              onClose={() => setSelected(null)}
            />
          </div>
        )}
      </div>
    </>
  );
}
