import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 이미지 도메인 설정 (remotePatterns 사용)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
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

export default nextConfig
