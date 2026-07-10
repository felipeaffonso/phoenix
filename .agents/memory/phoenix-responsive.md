---
name: Phoenix responsive layout
description: Mobile breakpoints, sidebar drawer, and Browser Notification API patterns used in the Phoenix frontend.
---

## Sidebar drawer pattern (mobile)

**Rule:** On mobile (≤768px), the sidebar is a fixed overlay drawer; a `.mobile-topbar` with a hamburger replaces the always-visible sidebar.

**How to apply:**
- `.sidebar` gets `position: fixed; transform: translateX(-100%); transition: transform 0.25s` at ≤768px
- Adding class `.open` brings it in: `transform: translateX(0)`
- A `.sidebar-overlay` div (conditionally rendered in React when `menuOpen`) covers the content with a semi-transparent backdrop and closes the drawer on click
- Body scroll is locked (`document.body.style.overflow = 'hidden'`) while drawer is open
- `useEffect(() => setMenuOpen(false), [pathname])` auto-closes on navigation

## Player layout on mobile

**Rule:** `.player-layout` collapses to 1-column (`grid-template-columns: 1fr`) and `.player-sidebar { order: -1 }` puts the rest timer above the exercise list.

**Why:** Timer is the most important element during a workout on mobile — users need to see it without scrolling.

## Rest timer + Browser Notification API

**Rule:** Use the `useRestTimer` hook in `src/lib/useRestTimer.ts`; request permission on first timer start (not on page mount).

**Why:** Requesting permission on page mount is disruptive and users deny it. Requesting it when they tap "✓ Registrar série" is contextually meaningful — they just committed to a rest period.

**Pattern:**
- `requestNotificationPermission()` — async, returns boolean, idempotent
- `useRestTimer()` returns `{ remaining, isActive, start(seconds, name?), skip }`
- `start()` fires `new Notification(...)` when countdown reaches 0
- `tag: 'phoenix-rest-timer'` on the Notification replaces previous rest notifications so they don't stack
- Color-codes timer: accent → amber (≤30s) → red (≤10s)

## Key breakpoints in globals.css

All mobile rules live in a single `@media (max-width: 768px)` block at the bottom of globals.css:
- `.library-layout` → `flex-direction: column`
- `.detail-panel` → `width: 100%; position: static`
- `.table-wrap` → `overflow-x: auto; -webkit-overflow-scrolling: touch`
- `.form-overlay` / `.form-modal` → bottom sheet (align-items: flex-end, rounded top corners only)
- `.dashboard-grid` → `repeat(2, 1fr)` (4→2 columns)
- `.template-grid` → `1fr` (auto-fill → single column)
