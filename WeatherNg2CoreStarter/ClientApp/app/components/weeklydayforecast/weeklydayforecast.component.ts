import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { DateTime } from "../../models/DateTime/DateTime";
import { Const } from "../../models/Const";

@Component({
    selector: 'weeklydayforecast',
    template: require('./weeklydayforecast.component.html'),
    styles: [require('./weeklydayforecast.component.css')]
})
export class WeeklyDayForecastComponent {
    @Input() forecast: IWeatherForecast;
    @Input() temperatureUnit: string;
    @Input() isSelectedForcast: boolean;
    ngOnChanges(changes) {
        //console.log("ngOnChanges changes: ",changes);
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
}


