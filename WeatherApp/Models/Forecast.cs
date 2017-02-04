using System;

namespace WeatherApp.Models
{
    public class Forecast
    {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int MorningLow { get; set; }
        public int DaytimeHigh { get; set; }
        public string ProbabilityOfPrecipiation { get; set; }

    }
}