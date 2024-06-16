/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    return [
      {
        source: '/api/auth/:path*', // Ensure NextAuth.js routes are not proxied
        destination: '/api/auth/:path*',
      },
      {
        source: '/api/:path*', // Proxy other API routes to the backend server
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = nextConfig;
