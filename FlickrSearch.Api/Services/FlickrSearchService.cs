using FlickrSearch.Api.Interfaces;
using FlickrSearch.Api.Models;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using System.Net;

namespace FlickrSearch.Api.Services
{
    public class FlickrSearchService : IFlickrSearchService
    {
        private readonly string url;
        public FlickrSearchService(IConfiguration config)
        {
            url = config["FlickrUrl"];
        }

        public Feed getFeed(string tag)
        {
            using (WebClient wc = new WebClient())
            {
                var result = wc.DownloadString(string.Format("{0}?format=json&nojsoncallback=1&tags={1}",url,tag));
                var Response = JsonSerializer.Deserialize<Feed>(result);
                return Response;
            }
        }
    }
}