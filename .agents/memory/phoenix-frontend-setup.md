---
name: Phoenix frontend setup
description: Next.js 16 on Replit — port, config, and HMR lessons from initial bootstrap.
---

## Next.js 16 on Replit

**Rule:** Webview workflows must use port 5000. Update `dev`/`start` scripts to `--port 5000`.

**Why:** Replit's `webview` output type only proxies port 5000. Other ports work as `console` type but don't show in the preview pane.

**How to apply:** `next dev --hostname 0.0.0.0 --port 5000` in package.json scripts.

---

## `allowedDevHosts` vs `allowedDevOrigins`

**Rule:** Next.js 16 dropped `allowedDevHosts`; use `allowedDevOrigins` in `next.config.ts`.

**Why:** `allowedDevHosts` was Next.js 15 API. Next.js 16 replaced it with `allowedDevOrigins` (takes full origin strings, not just hostnames). Using the old key produces a warning and HMR stays blocked through the Replit proxy.

**How to apply:**
```ts
const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',
    ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
  ],
};
```

---

## Next.js 15.3.3 blocked by Replit Package Firewall

**Rule:** Next.js 15.3.3 has a critical CVE and is blocked. Install `next@latest` (resolves to 16.x).

**Why:** Replit's security firewall blocked the 15.3.3 tarball. `npm install next@latest` succeeded with 16.2.10.
