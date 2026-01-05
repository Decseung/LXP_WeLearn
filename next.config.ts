/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 도메인 설정
  images: {
    domains: ['images.pexels.com'],
  },

  // API 프록시 설정
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
