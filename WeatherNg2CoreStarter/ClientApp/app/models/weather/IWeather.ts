import { IWeatherForecast } from "./IWeatherForecast"

export interface IWeather {
    zipCode: string;
    temperature: number;
    wind: string;
    relativeHumidity: string;
    weeklyForecast: IWeatherForecast[];
}

//export interface IWeatherForecast {
//    date: string;
//    description: string;
//    morningLow: number;
//    daytimeHigh: number;
//    probabilityOfPrecipiation: string;
//}
