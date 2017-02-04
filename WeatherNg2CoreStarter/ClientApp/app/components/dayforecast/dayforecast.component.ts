import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { DateTime } from "../../models/DateTime/DateTime";
import { Const } from "../../models/Const";

@Component({
    selector: 'dayforecast',
    template: require('./dayforecast.component.html'),
    styles: [require('./dayforecast.component.css')]
})
export class DayForeCastComponent {
    @Input() weather: IWeather;
    @Input() forecastIndex: number;
    @Input() temperatureUnit: string;
    @Output() onTemperatureUnitChange = new EventEmitter<string>();
    private forecast: IWeatherForecast;
   
    constructor() {
        //console.log("constructor weather:",this.weather);
        //console.log(this.forecast);
    }

    ngOnChanges(changes) {
        this.forecast = this.weather.weeklyForecast[this.forecastIndex];
        //console.log("ngOnChanges forecast: ", this.forecast);
    }

    public GetImageName(description: string) {
        if (!description)
            return;
        return Const.WEATHER_IMAGE_NAME[description.toLowerCase()];
    }

    public GetWeekDay(dateString:string) {
        var date = new DateTime(dateString);
        return date.getShortDayName();
    }

    public GetTemperatureByUnit(temperature: number) {
        switch (this.temperatureUnit) {
            case Const.TEMPERATUR_UNIT_CELCIUS:
                return temperature;
            case Const.TEMPERATUR_UNIT_FAHRENHEIT:
                return Math.round(32 + (temperature / 0.5556));
        }
    }

    public ChangeTemperatureUnit(unit: string) {
        this.onTemperatureUnitChange.emit(unit);
        this.temperatureUnit = unit == Const.TEMPERATUR_UNIT_CELCIUS ? Const.TEMPERATUR_UNIT_CELCIUS : Const.TEMPERATUR_UNIT_FAHRENHEIT;
    }
}


