'use client';

import { useApp } from '@/contexts/AppContext';
import ExerciseLibrary from '@/components/exercises/ExerciseLibrary';

export default function BibliotecaPage() {
  const { user } = useApp();

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">Biblioteca de Exercícios</div>
          <div className="page-subtitle">
            Catálogo global + exercícios privados
            {user.role === 'ADMIN' && ' · Modo admin: use a seção Admin para gerenciar o catálogo global'}
          </div>
        </div>
      </div>

      <div className="page-content">
        <ExerciseLibrary userId={user.id} isAdmin={false} />
      </div>
    </>
  );
}
