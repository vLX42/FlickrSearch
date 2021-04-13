using FlickrSearch.Api.Models;

namespace FlickrSearch.Api.Interfaces
{
    public interface IFlickrSearchService
    {
        Feed getFeed(string tag);
    }
}