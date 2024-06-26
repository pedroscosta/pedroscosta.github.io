const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
