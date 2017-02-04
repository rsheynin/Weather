using System.Collections.Generic;

namespace WeatherApp.Models
{
    public interface IForecastService
    {
        Weather GetCityForecastByZIP(int id);

        List<Weather> GetCitiesForecasts();
    }
}