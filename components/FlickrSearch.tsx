import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export function FlickrSearch() {
  const router = useRouter()
  const slug = router.query.slug || ''

  const [search, setSearch] = useState<string>(slug.toString())

  useEffect(() => {
    setSearch(slug.toString())
  }, [slug])

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => e.target.select();

  const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push(`/${search}`)
  }

  return (
    <form className="box pt-6" onSubmit={doSearch}>
      <div className="box-wrapper">
        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg
              className=" w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            value={search}
            placeholder="search for images"
            x-model="q"
            onChange={handleSearchInput}
            onFocus={handleFocus}
            className="w-full pl-4 outline-none focus:outline-none bg-transparent"
          />
        </div>
      </div>
    </form>
  )
}
