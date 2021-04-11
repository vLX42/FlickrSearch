export function FlickrLoading() {
  return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="rounded shadow-lg overflow-hidden align-top pb-10 relative">
          <div className="animate-pulse object-contain w-full object-top">
            <div className="bg-gray-300 h-64 w-full"></div>
            <div className=" h-3 m-4 bg-gray-200 rounded-md absolute w-2/3 left-0 bottom-0 "></div>
          </div>
        </div>
      ))}
    </>
  )
}
