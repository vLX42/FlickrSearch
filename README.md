# Flickr Search 

## Demo link: https://flickr-search.vercel.app/

## Tech stack
I went with next.js because it had a easy way of doing a proxy api for the Flickr part, and build in routing to get some nice urls. There where also some SSR feature, but they could not be used that well because of the changing result form the Flickr api.

## How to start the project
Do `yarn install` to install the packages and a `yarn dev` to run it local
## Todo before it can be used in production
* There is still no error handling when the api returns something unexpected
* The image part need to be revisted, maybe with some skeleton image until it's loaded. The build in image function in next.js/vercel would also work better if the source image where a bit bigger
* Also setup multiple env in github like development to test future development before putting it in production.
* The layout of the image could be better, and would need a rewrite.


## What could have been done differently?
* The SWR part would have worked better with a more complex API, function like reload in the background on refocus on the windows is acting a bit strange and is giving a bad user experince.