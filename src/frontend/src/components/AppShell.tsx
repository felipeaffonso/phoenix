'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import type { AppRole } from '@/lib/types';

type NavItem = {
  href: string;
  label: string;
  icon: string;
  adminOnly?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: '⊞' },
  { href: '/biblioteca', label: 'Biblioteca', icon: '◈' },
  { href: '/treinos', label: 'Templates', icon: '▤' },
  { href: '/player', label: 'Player', icon: '▶' },
  { href: '/historico', label: 'Histórico', icon: '⊙' },
  { href: '/admin', label: 'Admin', icon: '⊕', adminOnly: true },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { user, setRole } = useApp();
  const pathname = usePathname();

  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.adminOnly || user.role === 'ADMIN',
  );

  return (
    <div className="app-shell">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">🔥</div>
          <div>
            <div className="sidebar-brand-name">Phoenix</div>
            <div className="sidebar-brand-sub">Prototype · MVP</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section-label">App</div>
          {visibleItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? ' active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer: user chip + role switcher */}
        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="user-avatar">
              {user.displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="user-info-name">{user.displayName}</div>
              <div className="user-info-role">{user.role}</div>
            </div>
          </div>

          <div className="role-switcher">
            <div className="role-switcher-label">
              Papel
              <span className="dev-badge">DEV</span>
            </div>
            <div className="role-buttons">
              {(['ATHLETE', 'ADMIN'] as AppRole[]).map((role) => (
                <button
                  key={role}
                  className={`role-btn${user.role === role ? ' active' : ''}`}
                  onClick={() => setRole(role)}
                >
                  {role === 'ATHLETE' ? 'Atleta' : 'Admin'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="main-content">{children}</main>
    </div>
  );
}
