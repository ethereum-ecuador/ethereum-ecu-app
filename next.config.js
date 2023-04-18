/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportTrailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
