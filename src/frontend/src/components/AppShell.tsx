'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close sidebar when route changes (mobile navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.adminOnly || user.role === 'ADMIN',
  );

  const currentPage = NAV_ITEMS.find(
    (item) => pathname === item.href || pathname.startsWith(item.href + '/'),
  );

  return (
    <div className="app-shell">
      {/* ── Mobile topbar ── */}
      <header className="mobile-topbar">
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <div className="mobile-topbar-brand">
          <div className="sidebar-brand-icon" style={{ width: 24, height: 24, fontSize: 12 }}>🔥</div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
            {currentPage?.label ?? 'Phoenix'}
          </span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="user-avatar" style={{ width: 28, height: 28, fontSize: 12 }}>
            {user.displayName.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      {/* ── Sidebar overlay (mobile) ── */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ── */}
      <aside className={`sidebar${menuOpen ? ' open' : ''}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">🔥</div>
          <div>
            <div className="sidebar-brand-name">Phoenix</div>
            <div className="sidebar-brand-sub">Prototype · MVP</div>
          </div>
          {/* Mobile close button */}
          <button
            className="sidebar-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            ✕
          </button>
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
                onClick={() => setMenuOpen(false)}
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
