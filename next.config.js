/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizeCss: false
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { isServer }) => {
    // Optimize for static export and Bolt preview
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      }
    }
    
    // Disable source maps in production for smaller bundle
    if (config.mode === 'production') {
      config.devtool = false
    }
    
    return config
  },
  // Disable SWC for compatibility with Bolt preview
  swcMinify: false,
  // Ensure static export works properly
  distDir: 'out'
}

module.exports = nextConfig