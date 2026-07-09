import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow the Replit preview proxy to reach Next.js dev resources (HMR, etc.)
  allowedDevOrigins: [
    '127.0.0.1',
    ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
  ],
};

export default nextConfig;
