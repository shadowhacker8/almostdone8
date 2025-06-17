/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false
  },
  webpack: (config, { isServer }) => {
    // Disable SWC completely and use Babel for transforms
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });
    
    return config;
  },
  compiler: {
    removeConsole: false
  }
}

module.exports = nextConfig