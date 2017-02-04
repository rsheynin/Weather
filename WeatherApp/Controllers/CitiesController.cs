using System.Collections.Generic;
using System.Web.Http;
using WeatherApp.Models;

namespace WeatherApp.Controllers
{
    public class CitiesController : ApiController
    {
        private readonly ICityService _cityService;

        public CitiesController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [ActionName("GetCitiesByName")]
        [HttpGet]
        public List<City> GetCitiesByName(string id)//id it's city name
        {
            var cityName = id;
            if (string.IsNullOrEmpty(cityName))
                return _cityService.GetCities();
            var result = _cityService.GetCitiesByName(cityName);
            return result;
        }

        [ActionName("GetCityByZip")]
        [HttpGet]
        public City GetCityByZip(string id)//id it's city name
        {
            var result = _cityService.GetCityByZip(id);
            return result;
        }
    }
}
