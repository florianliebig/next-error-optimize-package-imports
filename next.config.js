/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",


  compress: true,

  experimental: {
    logging: "verbose",
    optimizePackageImports: [
      '@shared/components'
    ]
  }
}

module.exports = nextConfig
