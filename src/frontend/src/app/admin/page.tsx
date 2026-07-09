'use client';

import { useState, useEffect, useCallback } from 'react';
import { useApp } from '@/contexts/AppContext';
import {
  listAdminExercises,
  adminCreateGlobalExercise,
  adminUpdateGlobalExercise,
  adminDeactivateGlobalExercise,
  adminReactivateGlobalExercise,
} from '@/lib/adapters/exercises';
import { bodyAreaLabel, movementPatternLabel, equipmentTypeLabel } from '@/lib/labels';
import type { Exercise, CreatePrivateExerciseInput } from '@/lib/types';
import ExerciseForm from '@/components/exercises/ExerciseForm';
import ExerciseDetail from '@/components/exercises/ExerciseDetail';

function AccessDenied() {
  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Admin</div>
          <div className="page-subtitle">Área administrativa</div>
        </div>
      </div>
      <div className="page-content">
        <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-3)' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⊗</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-2)', marginBottom: 8 }}>
            Acesso negado
          </div>
          <div style={{ fontSize: 12 }}>
            Esta área é restrita a usuários com papel <strong>ADMIN</strong>.
            <br />
            Use o seletor de papel no menu lateral para alternar.
          </div>
        </div>
      </div>
    </>
  );
}

export default function AdminPage() {
  const { user } = useApp();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [showInactive, setShowInactive] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async () => {
    setLoading(true);
    const data = await listAdminExercises({ active: showInactive ? undefined : true });
    setExercises(data);
    setLoading(false);
  }, [showInactive]);

  useEffect(() => {
    if (user.role === 'ADMIN') reload();
  }, [user.role, reload]);

  if (user.role !== 'ADMIN') return <AccessDenied />;

  const filtered = search.trim()
    ? exercises.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.namePt.toLowerCase().includes(search.toLowerCase()),
      )
    : exercises;

  // ── Write actions ──────────────────────────────────────────────────────────

  async function handleCreate(input: CreatePrivateExerciseInput) {
    await adminCreateGlobalExercise(input);
    await reload();
    setShowForm(false);
    setEditingExercise(null);
    setError(null);
  }

  async function handleEdit(input: CreatePrivateExerciseInput) {
    if (!editingExercise) return;
    try {
      const updated = await adminUpdateGlobalExercise(editingExercise.id, input);
      setSelected(updated);
      await reload();
      setShowForm(false);
      setEditingExercise(null);
      setError(null);
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
      setShowForm(false);
      setEditingExercise(null);
    }
  }

  async function handleDeactivate(ex: Exercise) {
    if (!confirm(`Desativar "${ex.namePt}"?`)) return;
    try {
      const updated = await adminDeactivateGlobalExercise(ex.id);
      setSelected(updated);
      await reload();
      setError(null);
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
    }
  }

  async function handleReactivate(ex: Exercise) {
    try {
      const updated = await adminReactivateGlobalExercise(ex.id);
      setSelected(updated);
      await reload();
      setError(null);
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
    }
  }

  function openEdit(ex: Exercise) {
    setEditingExercise(ex);
    setShowForm(true);
    setError(null);
  }

  return (
    <>
      {showForm && (
        <ExerciseForm
          initial={editingExercise ?? undefined}
          isAdmin
          onSave={editingExercise ? handleEdit : handleCreate}
          onCancel={() => {
            setShowForm(false);
            setEditingExercise(null);
          }}
        />
      )}

      <div className="page-header">
        <div>
          <div className="page-title">
            Admin
            <span className="badge badge-global" style={{ marginLeft: 8 }}>ADMIN</span>
          </div>
          <div className="page-subtitle">Gerenciamento do catálogo global de exercícios</div>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => { setEditingExercise(null); setShowForm(true); }}>
          + Novo exercício global
        </button>
      </div>

      <div className="page-content">
        {/* Scope boundary notice */}
        <div style={{
          padding: '10px 14px',
          background: 'var(--blue-bg)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: 'var(--radius-sm)',
          fontSize: 12,
          color: 'var(--blue)',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
        }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>ℹ</span>
          <div>
            <strong>Escopo do Admin:</strong> Esta superfície gerencia apenas exercícios do catálogo
            global (<strong>GLOBAL</strong>). Exercícios privados de atletas não aparecem aqui —
            pertencem ao escopo de cada atleta e são gerenciados por eles mesmos.
            <br />
            <span style={{ opacity: 0.75 }}>
              Nota de protótipo: editar/desativar funciona apenas para exercícios criados nesta sessão. O catálogo seed é somente leitura até o backend estar conectado.
            </span>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div style={{
            padding: '10px 14px',
            background: 'var(--red-bg)',
            border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 12,
            color: 'var(--red)',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
          }}>
            <span>⚠ {error}</span>
            <button className="btn-icon" onClick={() => setError(null)}>✕</button>
          </div>
        )}

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div className="search-input-wrap" style={{ maxWidth: 320 }}>
            <span className="search-icon">⌕</span>
            <input
              className="search-input"
              type="text"
              placeholder="Buscar no catálogo global…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className={`filter-toggle${showInactive ? ' active' : ''}`}
            onClick={() => setShowInactive((v) => !v)}
          >
            {showInactive ? '◉' : '○'} Inativos
          </button>
          <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 4 }}>
            {loading ? 'Carregando…' : `${filtered.length} exercício${filtered.length !== 1 ? 's' : ''}`}
          </span>
        </div>

        {/* Table + detail panel */}
        <div className="library-layout">
          <div className="library-list">
            <div className="table-wrap">
              {filtered.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">◈</div>
                  <div className="empty-state-title">Nenhum exercício encontrado</div>
                  <div className="empty-state-body">Ajuste a busca ou crie um novo exercício global.</div>
                </div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Área</th>
                      <th>Padrão</th>
                      <th>Equipamento</th>
                      <th style={{ width: 60 }}>Status</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((ex) => (
                      <tr
                        key={ex.id}
                        className={[
                          selected?.id === ex.id ? 'row-selected' : '',
                          !ex.active ? 'row-inactive' : '',
                        ].filter(Boolean).join(' ')}
                        onClick={() => setSelected(selected?.id === ex.id ? null : ex)}
                      >
                        <td>
                          <div className="cell-name-stack">
                            <span className="cell-name-en">{ex.name}</span>
                            <span className="cell-name-pt">{ex.namePt}</span>
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
                        <td style={{ color: 'var(--text-3)', maxWidth: 200 }}>
                          <div className="truncate" style={{ maxWidth: 200 }}>
                            {ex.defaultSafetyNotes ?? '—'}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {selected && (
            <div className="detail-panel">
              <ExerciseDetail
                exercise={selected}
                currentUserId={user.id}
                isAdmin
                onEdit={openEdit}
                onDeactivate={handleDeactivate}
                onReactivate={handleReactivate}
                onClose={() => setSelected(null)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
