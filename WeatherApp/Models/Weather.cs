namespace WeatherApp.Models
{
    public class Weather
    {
        public int ZipCode { get; set; }
        public int Temperature { get; set; }
        public string Wind { get; set; }
        public string RelativeHumidity { get; set; }
        public Forecast[] WeeklyForecast { get; set; }

    }
}