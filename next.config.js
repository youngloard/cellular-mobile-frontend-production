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
    NEXT_PUBLIC_API_URL: '/api',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cellular-mobile-backened-production.up.railway.app/api/:path*',
      },
    ]
  },

}

module.exports = nextConfig
