/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Required for Docker deployment
  transpilePackages: ['react-icons'], // Ensure react-icons are bundled correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  generateBuildId: async () => process.env.NEXT_BUILD_ID || 'build-local',
  experimental: {
    // workerThreads: false,
    // webpackBuildWorker: false,
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://cellular-mobile-backened-production.up.railway.app/api',
  },
  async rewrites() {
    const apiProxyTarget = process.env.API_PROXY_TARGET || 'https://cellular-mobile-backened-production.up.railway.app/api';
    return [
      {
        source: '/api/:path*',
        destination: `${apiProxyTarget}/:path*`,
      },
    ]
  },

}

module.exports = nextConfig
