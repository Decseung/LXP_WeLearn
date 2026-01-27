import { PlayListCard } from '@/types/playlist/playlist'

interface ShortsItemsDummy {
  id: string
  thumbnail: string
  title: string
  viewCount: string
  duration: string
}

export const shortsItems: ShortsItemsDummy[] = [
  {
    id: '1',
    thumbnail: '',
    title: '9:16 :: 10이라는 계산법하는 열리',
    viewCount: '250k',
    duration: '1분',
  },
  {
    id: '2',
    thumbnail: '',
    title: '9:16 :: 펜타르는 줄인이오 소입',
    viewCount: '250k',
    duration: '1분',
  },
  {
    id: '3',
    thumbnail: '',
    title: '그인의 알벡트 모다딘 알하는 갈의',
    viewCount: '250k',
    duration: '1분',
  },
  {
    id: '4',
    thumbnail: '',
    title: '9:16 ≒ 리고 밀켜드 적으로 쁘로 위가 하...',
    viewCount: '250k',
    duration: '1분',
  },
]

//  mock 데이터
export const likeShorts = [
  {
    id: '1',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    title: 'Spring Boot 시작하기',
    nickname: '개발자홍길동',
    progress: 75,
  },
  {
    id: '2',
    category: 'UI/UX',

    thumbnailUrl: 'https://images.pexels.com/photos/35008891/pexels-photo-35008891.jpeg',
    title: 'Figma 오토 레이아웃 기초',
    nickname: '디자인펭귄',
    progress: 50,
  },
  {
    id: '3',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/35383162/pexels-photo-35383162.jpeg',
    title: 'React 상태 관리 30초 요약',
    nickname: '프론트선배',
    progress: 100,
  },
  {
    id: '4',
    category: 'UI/UX',
    thumbnailUrl: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg',
    title: 'CSS Grid 1분 이해',
    nickname: 'CSS요정',
    progress: 25,
  },
  {
    id: '5',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg',
    title: 'DB 인덱스는 왜 필요할까?',
    nickname: '백엔드러버',
    progress: 0,
  },
]

export const savedPlaylists: {
  id: string
  visibility: 'public' | 'private'
  shortsCount: number
  thumbnailUrl: string
  title: string
  category: string
  progress: number
}[] = [
  {
    id: '1',
    visibility: 'private',
    shortsCount: 12,
    thumbnailUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    title: 'Spring Boot 완전 정복',
    category: '프로그래밍',
    progress: 66,
  },
  {
    id: '2',
    visibility: 'public',

    shortsCount: 8,
    thumbnailUrl: 'https://images.pexels.com/photos/35383162/pexels-photo-35383162.jpeg',
    title: 'React 상태 관리 모음',
    category: '프로그래밍',
    progress: 50,
  },
  {
    id: '3',
    visibility: 'public',
    shortsCount: 5,
    thumbnailUrl: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg',
    title: 'CSS 레이아웃 마스터',
    category: 'UI/UX',
    progress: 100,
  },
  {
    id: '4',
    visibility: 'public',
    shortsCount: 15,
    thumbnailUrl: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg',
    title: '데이터베이스 기초부터 실전까지',
    category: '프로그래밍',
    progress: 25,
  },
  {
    id: '5',
    visibility: 'public',

    shortsCount: 7,
    thumbnailUrl: 'https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg',
    title: 'Vue vs React 비교 분석',
    category: '프로그래밍',
    progress: 75,
  },
  {
    id: '6',
    visibility: 'public',
    shortsCount: 10,
    thumbnailUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
    title: 'REST API 완벽 가이드',
    category: '프로그래밍',
    progress: 50,
  },
  {
    id: '7',
    visibility: 'public',
    shortsCount: 6,
    thumbnailUrl: 'https://images.pexels.com/photos/35008891/pexels-photo-35008891.jpeg',
    title: 'Figma 디자인 시스템',
    category: 'UI/UX',
    progress: 33,
  },
  {
    id: '8',
    visibility: 'public',
    shortsCount: 9,
    thumbnailUrl: 'https://images.pexels.com/photos/35308304/pexels-photo-35308304.jpeg',
    title: '알고리즘 정복하기',
    category: '프로그래밍',
    progress: 66,
  },
]

//  users 데이터
export const user = {
  name: '김코딩',
  email: 'test@test.com',
  profileImageUrl: '/images/favicon_shortudy.png',
}

export const playlistGroup: PlayListCard[] = [
  {
    id: '1',
    shortsCount: 12,
    thumbnailUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    title: 'Spring Boot 완전 정복',
    category: '프로그래밍',
    progress: 66,
    viewCount: 120,
    likeCount: 48,
  },

  {
    id: '3',
    shortsCount: 5,
    thumbnailUrl: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg',
    title: 'CSS 레이아웃 마스터',
    category: 'UI/UX',
    progress: 100,
    viewCount: 95,
    likeCount: 37,
  },
  {
    id: '4',
    shortsCount: 15,
    thumbnailUrl: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg',
    title: '데이터베이스 기초부터 실전까지',
    category: '프로그래밍',
    progress: 25,
    viewCount: 140,
    likeCount: 52,
  },
  {
    id: '5',
    shortsCount: 7,
    thumbnailUrl: 'https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg',
    title: 'Vue vs React 비교 분석',
    category: '프로그래밍',
    progress: 75,
    viewCount: 110,
    likeCount: 44,
  },
]
