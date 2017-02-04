using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace WeatherNg2CoreStarter.Models
{
    public class ForecastService : IForecastService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public ForecastService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        public Weather GetCityForecastByZIP(int id)
        {
            var citiesForecasts = GetCitiesForecasts();
            var result = citiesForecasts.FirstOrDefault(x => x.ZipCode == id);
            result.WeeklyForecast = result.WeeklyForecast.OrderBy(x => x.Date).ToArray();
            return result;
        }

        public List<Weather> GetCitiesForecasts()
        {
            var path = Path.Combine(_hostingEnvironment.WebRootPath, _hostingEnvironment.ContentRootPath, "Resources\\WeeklyForecastCities.json");
            var json = File.ReadAllText(path);
            var format = "dd/MM/yyyy"; // your datetime format
            var dateTimeConverter = new IsoDateTimeConverter { DateTimeFormat = format };

            var result = JsonConvert
                .DeserializeObject<List<Weather>>(json, dateTimeConverter);
            return result;
        }
    }
}