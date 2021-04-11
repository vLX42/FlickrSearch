import { Item } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  item: Item
}

export function FlickrImage({ item }: Props) {
  return (
    <div className="rounded shadow-lg overflow-hidden align-top relative pb-10">
      <Image
        src={item.media.m}
        alt={item.title}
        title={item.title}
        layout="responsive"
        width="240"
        height="240"
        priority={true}
        className="object-contain h-48 w-full object-top"
      />
      <p className="md:text-sm absolute w-full right-0 bottom-0 p-3 truncate overflow-ellipsis overflow-hidden">
        {item.tags &&
          item.tags
            .split(' ')
            .slice(0, 5)
            .map((tag) => (
              <Link key={tag} href={`/${tag}`}>
                <a className="pr-3">#{tag}</a>
              </Link>
            ))}
      </p>
    </div>
  )
}
