import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tags: searchQuery } = req.query
  async function getFlickrFromApi() {
    try {
      let url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${searchQuery}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return await response.json()
    } catch (ex) {
      console.error('get-data', ex.toString())
      return []
    }
  }

  let media = await getFlickrFromApi()

  return res.json(media)
}
