'use client';

import React, { createContext, useContext, useState } from 'react';
import type { MockUser, AppRole } from '@/lib/types';

const MOCK_ATHLETE: MockUser = {
  id: 'mock-user-athlete-001',
  displayName: 'Felipe',
  email: 'felipe@phoenix.dev',
  role: 'ATHLETE',
};

const MOCK_ADMIN: MockUser = {
  id: 'mock-user-admin-001',
  displayName: 'Admin',
  email: 'admin@phoenix.dev',
  role: 'ADMIN',
};

type AppContextValue = {
  user: MockUser;
  setRole: (role: AppRole) => void;
};

const AppContext = createContext<AppContextValue>({
  user: MOCK_ATHLETE,
  setRole: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser>(MOCK_ATHLETE);

  function setRole(role: AppRole) {
    setUser(role === 'ADMIN' ? MOCK_ADMIN : MOCK_ATHLETE);
  }

  return (
    <AppContext.Provider value={{ user, setRole }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
