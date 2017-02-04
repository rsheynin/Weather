namespace WeatherNg2CoreStarter.Models
{
    public class City
    {
        //{"stateName":"Alabama","shortStateName":"Ala.","stateCode":"AL","city":"Montgomery","zip":36101}
        public string city { get; set; }
        public string zip { get; set; }
        public string stateCode { get; set; }
        public string shortStateName { get; set; }
        public string stateName { get; set; }
    }
}