import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ignore TypeScript and ESLint build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
