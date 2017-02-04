export class Const {
    public static readonly WEATHER_IMAGE_NAME: { [key: string]: string; } = {
        "cloudy": "cloudy",
        "partly cloudy": "partly_cloudy",
        "scattered showers": "rain_s_cloudy",
        "rain": "rain",
        "rainy": "rain_light",
        "showers": "rain_light",
        "sunny": "sunny",
        "snow with brief sleet": "snow",
        "snow showers": "snow_light",
        "fog": "fog"
    };

    public static get TEMPERATUR_UNIT_CELCIUS(): string { return "C"; };
    public static get TEMPERATUR_UNIT_FAHRENHEIT(): string { return "F"; };
}