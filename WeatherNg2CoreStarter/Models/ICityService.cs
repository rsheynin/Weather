using System.Collections.Generic;

namespace WeatherNg2CoreStarter.Models
{
    public interface ICityService
    {
        List<City> GetCitiesByName(string cityName);
        City GetCityByZip(string zip);
        List<City> GetCities();
    }
}