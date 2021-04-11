import React from 'react'

type props = {
  children: React.ReactNode
}

export function FlickrLayout({ children }: props) {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div className="hero">
        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
          <h1 className=" font-bold text-3xl text-gray-900">
            Flickr Public Api Search
          </h1>
          <p className=" font-base text-base text-gray-600">
            Write something in the text field to do a search
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
