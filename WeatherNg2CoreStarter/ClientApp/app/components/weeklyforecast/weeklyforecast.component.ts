import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { DateTime } from "../../models/DateTime/DateTime";
import { Const } from "../../models/Const";

@Component({
    selector: 'weeklyforecast',
    template: require('./weeklyforecast.component.html'),
    styles: [require('./weeklyforecast.component.css')]
})
export class WeeklyForecastComponent {
    @Input() weather: IWeather;
    @Input() temperatureUnit: string;
    @Input() selectedForecastIndex: number;
    @Output() onForecastIndexChange = new EventEmitter<number>();
   
    constructor() {
        //console.log("constructor weather:",this.weather);
        //console.log(this.forecast);
    }

    ngOnChanges(changes) {
        //console.log("ngOnChanges changes: ",changes);
        //console.log("ngOnChanges weather: ", this.weather);
        //console.log("ngOnChanges forecastIndex: ", this.forecastIndex);
        //this.forecast = this.weather.weeklyForecast[this.forecastIndex];
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
        this.temperatureUnit = unit == Const.TEMPERATUR_UNIT_CELCIUS ? Const.TEMPERATUR_UNIT_CELCIUS : Const.TEMPERATUR_UNIT_FAHRENHEIT;
    }

    public SelectForcast(index: number) {
        this.onForecastIndexChange.emit(index);
        this.selectedForecastIndex = index;
    }

    public isSelectedForcast(index: number) {
        return this.selectedForecastIndex == index;
    }
}


