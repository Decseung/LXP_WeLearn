import { redirect } from 'next/navigation'

interface CommentsPageProps {
  params: Promise<{ id: string }>
}

export default async function CommentsPage({ params }: CommentsPageProps) {
  const { id } = await params
  redirect(`/shorts/${id}`)
}
