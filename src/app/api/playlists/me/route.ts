import { PlaylistApi } from '@/services/playlist/playlist.service'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const page = Number(searchParams.get('page') ?? 0)
    const size = Number(searchParams.get('size') ?? 8)
    const sort = searchParams.get('sort') ?? 'createdAt,desc'

    const response = await PlaylistApi.getUserPlaylist({ page, size, sort })

    return NextResponse.json({
      success: true,
      data: response,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : '플레이리스트 불러오기 실패',
    })
  }
}
