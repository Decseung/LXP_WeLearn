import { commentApi } from '@/services/comments/comments.service'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  console.log('POST API 진입, id =', id) // 로그 확인
  try {
    // 실제 신고 로직
    const res = await commentApi.reportComment(Number(id))
    return NextResponse.json({ success: true, data: res })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : '댓글 신고 에러 발생',
    })
  }
}
