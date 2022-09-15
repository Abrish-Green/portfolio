import('next').NextConfig 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fontawesomeicons.com'],
  },
}

module.exports = nextConfig
