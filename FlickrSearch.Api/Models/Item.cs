using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace FlickrSearch.Api.Models
{
    public class Item
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("link")]
        public string Link { get; set; }
        [JsonPropertyName("media")]
        public Media Media { get; set; }
        [JsonPropertyName("date_taken")]
        public DateTime DateTaken { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("published")]
        public DateTime Published { get; set; }
        [JsonPropertyName("author")]
        public string Author { get; set; }
        [JsonPropertyName("author_id")]
        public string AuthorId { get; set; }
        [JsonPropertyName("tags")]
        public string Tags { get; set; }


    }
}