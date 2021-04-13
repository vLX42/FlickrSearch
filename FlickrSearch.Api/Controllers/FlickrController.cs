using FlickrSearch.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace FlickrSearch.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlickrSearchController : ControllerBase
    {

        private readonly IFlickrSearchService _flickrService;

        public FlickrSearchController(IFlickrSearchService flickrService)
        {
            _flickrService = flickrService;
        }

        [HttpGet]
        public IActionResult Get(string tag)
        {
            try
            {
                return Ok(_flickrService.getFeed(tag));
            }
            catch (System.Exception)
            {
                return BadRequest("Unknown Error");
            }

        }
    }
}
