import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Feed } from '../types'
import { fetcher } from '../lib'

export function useFlickr() {
  const router = useRouter()
  const slug = router.query.slug || ''
  const env = process.env.NODE_ENV

  const url =
    env == 'development'
      ? `https://localhost:9099/api/FlickrSearch?tag=${slug}`
      : `/api/getData?tag=${slug}`
  const { data, error, ...rest } = useSWR<Feed>(url, fetcher)

  const isLoading = !data && !error

  return { feed: data, isLoading, error, ...rest }
}
