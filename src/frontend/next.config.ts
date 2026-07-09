import type { NextConfig } from 'next';

const apiOrigin = process.env.PHOENIX_API_ORIGIN ?? 'http://localhost:8080';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Allow the Replit preview proxy to reach Next.js dev resources (HMR, etc.)
  allowedDevOrigins: [
    '127.0.0.1',
    ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
  ],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
