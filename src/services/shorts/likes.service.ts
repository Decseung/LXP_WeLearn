import { clientApi } from '@/lib/utils/clientApiUtils'

export const likeApi = {
  like: async (shortsId: number) => {
    const response = await clientApi.post<Response>(`api/v1/${shortsId}/likes`)

    if (!response.ok) throw new Error('좋아요 실패')

    return response
  },

  unlike: async (shortsId: number) => {
    return await clientApi.delete(`api/v1/${shortsId}/unlikes`)
  },
}
