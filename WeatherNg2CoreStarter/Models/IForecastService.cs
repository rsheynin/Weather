using System.Collections.Generic;

namespace WeatherNg2CoreStarter.Models
{
    public interface IForecastService
    {
        Weather GetCityForecastByZIP(int id);

        List<Weather> GetCitiesForecasts();
    }
}