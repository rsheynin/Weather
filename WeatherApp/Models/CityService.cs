using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace WeatherApp.Models
{
    public class CityService : ICityService
    {
        public List<City> GetCitiesByName(string cityName)
        {
            cityName = cityName.ToLowerInvariant();

            var allCities = GetCities();
            var result = allCities
                .Where(s => s.city.ToLowerInvariant().StartsWith(cityName))
                .ToList();
            return result;
        }
       
        public City GetCityByZip(string zip)
        {
            var allCities = GetCities();
            var result = allCities
                .FirstOrDefault(s => s.zip == zip);
            return result;
        }

        public List<City> GetCities()
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Resources\\USACities.json");
            var result = JsonConvert.DeserializeObject<List<City>>(File.ReadAllText(path));
            return result;
        }
    }
}