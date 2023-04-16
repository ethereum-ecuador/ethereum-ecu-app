/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
