/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      '@shared/components'
    ]
  }
}

module.exports = nextConfig
