/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",


  compress: true,

  transpilePackages: [
    '@shared/components'
  ],

  experimental: {
    logging: "verbose",
    optimizePackageImports: [
      '@shared/components'
    ]
  }
}

module.exports = nextConfig
