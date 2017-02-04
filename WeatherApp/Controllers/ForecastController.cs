using System.Collections.Generic;
using System.Web.Http;
using WeatherApp.Models;

namespace WeatherApp.Controllers
{
    public class ForecastController : ApiController
    {
        private readonly IForecastService _forecastService;

        public ForecastController(IForecastService forecastService)
        {
            _forecastService = forecastService;
        }

        [HttpGet]
        public List<Weather> GetCitiesForecasts()
        {
            var result = _forecastService.GetCitiesForecasts();

            return result;
        }

        [HttpGet]
        public Weather GetCityForecastByZIP(int id)
        {
            var result = _forecastService.GetCityForecastByZIP(id);

            return result;
        }

        //[HttpGet]
        //public Weather GetCityWeatherByZIP(int id)
        //{
        //    return null;
        //}
    }
}
