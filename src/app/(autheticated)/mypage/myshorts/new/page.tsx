import { redirect } from 'next/navigation'
import ShortsFormContainer from '@/features/register/components/ShortsFormContainer'
import { userApi } from '@/services/mypage/user.service'

export const metadata = {
  title: '숏츠 등록',
  description: '새로운 숏츠를 등록합니다.',
}

export default async function ShortsCreatePage() {
  const user = await userApi.getMe().catch(() => null)

  if (!user?.id) {
    redirect('/signin')
  }

  return (
    <div className="h-full w-full max-w-7xl">
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <ShortsFormContainer userId={user.id} />
      </div>
    </div>
  )
}
