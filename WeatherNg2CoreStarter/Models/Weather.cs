namespace WeatherNg2CoreStarter.Models
{
    public class Weather
    {
        public int ZipCode { get; set; }
        public int Temperature { get; set; }
        public string Wind { get; set; }
        public string RelativeHumidity { get; set; }
        public WeatherForecast[] WeeklyForecast { get; set; }

    }
}