using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WeatherNg2CoreStarter.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WeatherNg2CoreStarter.Controllers
{
    [Route("api/[controller]")]
    public class CityController : Controller
    {
        private readonly ICityService _cityService;

        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [HttpGet("[action]/{name}")]//("[controller]/[action]/{name}")
        public List<City> GetCitiesByName(string name)//string id//id it's city name
        {
            if (string.IsNullOrEmpty(name))
                return _cityService.GetCities();
            var result = _cityService.GetCitiesByName(name);
            return result;
        }

        [HttpGet("[action]/{zip}")]
        public City GetCityByZip(string zip)//id it's city name
        {
            var result = _cityService.GetCityByZip(zip);
            return result;
        }
    }
}
