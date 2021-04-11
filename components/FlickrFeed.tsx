import { FlickrImage, FlickrLoading } from './'
import { useFlickr } from '../hooks'
import Head from 'next/head'

export function FlickrFeed() {
  const { feed, isLoading } = useFlickr()

  return (
    <>
      <Head>
        <title>{feed?.title}</title>
        <meta name="description" content={feed?.description} />
      </Head>
      <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        {isLoading ? (
          <FlickrLoading />
        ) : (
          feed?.items.map((item, index) => <FlickrImage key={index} item={item} />)
        )}
      </div>
    </>
  )
}
