import { ShortsBase } from '@/types/shorts/shorts'

export function mapRecommendationToShortsBase(data: { shorts: ShortsBase }[]): ShortsBase[] {
  return data.map((shorts: { shorts: ShortsBase }) => ({
    shortsId: shorts.shorts.shortsId,
    title: shorts.shorts.title,
    description: shorts.shorts.description ?? '',
    categoryId: shorts.shorts.categoryId ?? 0,
    categoryName: shorts.shorts.categoryName ?? '',
    keywords: shorts.shorts.keywords ?? [],

    videoUrl: shorts.shorts.videoUrl,
    thumbnailUrl: shorts.shorts.thumbnailUrl ?? null,
    durationSec: shorts.shorts.durationSec ?? 0,

    userId: shorts.shorts.userId ?? 0,
    userNickname: shorts.shorts.userNickname ?? '',
    userProfileUrl: shorts.shorts.userProfileUrl ?? null,

    status: shorts.shorts.status,
    visibility: shorts.shorts.visibility,
    likeCount: shorts.shorts.likeCount ?? 0,
    viewCount: shorts.shorts.viewCount ?? 0,
    commentCount: shorts.shorts.commentCount ?? 0,
    isLiked: shorts.shorts.isLiked,

    createdAt: shorts.shorts.createdAt ?? '',
    updatedAt: shorts.shorts.updatedAt ?? '',
  }))
}
