/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://cdn.pixabay.com',
    "cdn.pixabay.com"],
  },
}

module.exports = nextConfig
