import { FlickrImage, FlickrLoading } from './'
import { useFlickr } from '../hooks'

export function FlickrFeed() {
  const { feed, isLoading } = useFlickr()

  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
      {isLoading ? (
        <FlickrLoading />
      ) : (
        feed?.items.map((item) => <FlickrImage item={item} />)
      )}
    </div>
  )
}
