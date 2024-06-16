/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*', // Ensure NextAuth.js routes are not proxied
        destination: '/api/auth/:path*',
      },
      {
        source: '/api/:path*', // Proxy other API routes to the backend server
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = nextConfig;
