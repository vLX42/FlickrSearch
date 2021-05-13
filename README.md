# Flickr Search

Demo link: https://flickr-search.vercel.app/

## Tech stack
I went with next.js for the frontend, the backend is .net core 5.0

## How to start the project
Go to the frontend folder `cd FlickrSearch` and install the packages `yarn install`.

Then you have to swith to the backend folder `cd FlickrSearch.Api` and restore the dotnet application with a `dotnet restore` add the https certificat `dotnet dev-certs https --trust`.

Now return to the root folder and run `yarn dev` this should start the backend and the frontend.
The frontend should be available on http://localhost:3000

## Todo before it can be used in production
* There is still no error handling when the api returns something unexpected.
* Cors rules need to be setup in production.
* The image part need to be revisted, maybe with some skeleton image until it's loaded. The build in image function in next.js/vercel would also work better if the source image where a bit bigger
* Also setup multiple env in github like development to test future development before putting it in production.
* The layout of the image could be better, and would need a rewrite.


## What could have been done differently?
* Map all posible parameters for the search api in the .net part
* The SWR part would have worked better with a more complex API, function like reload in the background on refocus on the windows is acting a bit strange and is giving a bad user experince.
