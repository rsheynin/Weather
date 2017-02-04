using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using WeatherApp.Controllers;

namespace WeatherApp.Models
{
    public class ForecastService : IForecastService
    {
        public Weather GetCityForecastByZIP(int id)
        {
            var citiesForecasts = GetCitiesForecasts();
            var result = citiesForecasts.FirstOrDefault(x => x.ZipCode == id);
            return result;
        }

        public List<Weather> GetCitiesForecasts()
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Resources\\WeeklyForecastCities.json");
            var json = File.ReadAllText(path);
            var format = "dd/MM/yyyy"; // your datetime format
            var dateTimeConverter = new IsoDateTimeConverter { DateTimeFormat = format };

            var result = JsonConvert
                .DeserializeObject<List<Weather>>(json, dateTimeConverter);
            return result;
        }
    }
}