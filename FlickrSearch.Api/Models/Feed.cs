using System;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace FlickrSearch.Api.Models
{
    public class Feed
    {
        public Feed()
        {
            Items = new List<Item>();
        }

        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("link")]
        public string Link { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [DataType(DataType.Date)]
        [JsonPropertyName("modified")]
        public DateTime Modified { get; set; }
        [JsonPropertyName("generator")]
        public string Generator { get; set; }
        [JsonPropertyName("items")]
        public List<Item> Items { get; set; }

    }
}