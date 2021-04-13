using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace FlickrSearch.Api.Models
{
    public class Media
    {
        [JsonPropertyName("m")]
        public string ImageLink { get; set; }

    }
}