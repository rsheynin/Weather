using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherNg2CoreStarter.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WeatherNg2CoreStarter.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        private readonly IForecastService _forecastService;

        public WeatherController(IForecastService forecastService)
        {
            _forecastService = forecastService;
        }

        //[HttpGet]
        //public List<Weather> GetCitiesForecasts()
        //{
        //    var result = _forecastService.GetCitiesForecasts();

        //    return result;
        //}

        [HttpGet("[action]/{zip}")]
        public Weather GetCityForecastByZIP(int zip)
        {
            var result = _forecastService.GetCityForecastByZIP(zip);

            return result;
        }
    }
}
