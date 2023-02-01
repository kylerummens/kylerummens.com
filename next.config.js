/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'vbwgwexedzhcxpxxnhey.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig
