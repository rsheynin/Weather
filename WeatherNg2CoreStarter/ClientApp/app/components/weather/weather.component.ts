import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { City } from '../../models/city/city';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { WeatherService } from '../../models/weather/weather.service';
import { CityService } from '../../models/city/city.service';
import { Const } from '../../models/Const';

@Component({
    selector: 'fetchdata',
    template: require('./weather.component.html'),
    styles: [require('./weather.component.css')]
})
export class WeatherComponent {
    private city: City;
    private zip: string;
    private selectedForecastIndex: number;
    private temperatureUnit: string = Const.TEMPERATUR_UNIT_CELCIUS;
    private weather: IWeather;
    constructor(private route: ActivatedRoute,
                private weatherService: WeatherService,
                private cityService: CityService) {
        this.selectedForecastIndex = 0;
        let zip = this.route.snapshot.params['zip'];
        this.GetCityByZip(zip);
        this.GetWeatherForecastByZip(zip);
    }

    public GetCityByZip(zip: string) {
        this.cityService.getCityByZip(zip)
            .subscribe(city => this.city = city);
    }

    public GetWeatherForecastByZip(zip: string) {
        this.weatherService.GetCityForecastByZIP(zip)
            .subscribe(weatherForcast => {

                //weatherForcast.weeklyForecast.sort(function (a, b) {
                //    let dateA = new Date(a.date);
                //    let dateB = new Date(b.date);
                //    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
                //});
                this.weather = weatherForcast;
            });
    }

    public onForecastIndexChange(index: number) {
        this.selectedForecastIndex = index;
    }

    public onTemperatureUnitChange(unit: string) {
        this.temperatureUnit = unit;
    }
}
