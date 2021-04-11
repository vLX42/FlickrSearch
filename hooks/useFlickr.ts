
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Feed } from '../types'
import { fetcher } from '../lib'

export function useFlickr() {
    const router = useRouter()
    const slug = router.query.slug || ''


    const { data, error, ...rest } = useSWR<Feed>(`/api/getData?q=${slug}`, fetcher)


  const isLoading = !data && !error


  return { feed: data, isLoading, error, ...rest }
}
