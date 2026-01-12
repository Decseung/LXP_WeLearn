import LikeShortsList from '@/features/mypage/dashboard/LikeShortsList'
import SavedShortsList from '@/features/mypage/dashboard/SavedShortsList'
import UserProfile from '@/features/mypage/dashboard/UserProfile'

//  mock 데이터
const likeShorts = [
  {
    id: '1',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    title: 'Spring Boot 시작하기',
    channelName: '개발자홍길동',
    progress: 75,
  },
  {
    id: '2',
    category: 'UI/UX',

    thumbnailUrl: 'https://images.pexels.com/photos/35008891/pexels-photo-35008891.jpeg',
    title: 'Figma 오토 레이아웃 기초',
    channelName: '디자인펭귄',
    progress: 50,
  },
  {
    id: '3',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/35383162/pexels-photo-35383162.jpeg',
    title: 'React 상태 관리 30초 요약',
    channelName: '프론트선배',
    progress: 100,
  },
  {
    id: '4',
    category: 'UI/UX',
    thumbnailUrl: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg',
    title: 'CSS Grid 1분 이해',
    channelName: 'CSS요정',
    progress: 25,
  },
  {
    id: '5',
    category: '프로그래밍',
    thumbnailUrl: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg',
    title: 'DB 인덱스는 왜 필요할까?',
    channelName: '백엔드러버',
    progress: 0,
    isNew: true,
  },
]

const savedPlaylists: {
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
const user = {
  name: '홍길동',
  email: 'test@test.com',
  profileImageUrl: 'https://images.pexels.com/photos/35308304/pexels-photo-35308304.jpeg',
}

export default async function MyPageDashboard() {
  return (
    <div className="h-full w-full">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <UserProfile
          userName={user.name}
          userEmail={user.email}
          profileImageUrl={user.profileImageUrl}
        />
        <LikeShortsList shorts={likeShorts} />
        <SavedShortsList playlists={savedPlaylists} />
      </main>
    </div>
  )
}
