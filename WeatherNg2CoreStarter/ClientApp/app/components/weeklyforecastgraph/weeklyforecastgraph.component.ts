import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { DateTime } from "../../models/DateTime/DateTime";
import { Const } from "../../models/Const";

@Component({
    selector: 'weeklyforecastgraph',
    template: require('./weeklyforecastgraph.component.html'),
    styles: [require('./weeklyforecastgraph.component.css')]
})
export class WeeklyForecastGraphComponent {
    @Input() weather: IWeather;
    @Input() temperatureUnit: string;
    private tempBtn: string = "ksb _pMb ksbs";
    private precipBtn: string = "ksb _oMb _pMb";
    private windBtn: string = "ksb _oMb";

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

    public GetGraphByType(selectedGraphType:string) {
        //angular.element('#linechart').empty();
        //self.xkey = 'Date';
        switch (selectedGraphType) {
            case "Temperature":

                this.tempBtn = "ksb _pMb ksbs";
                this.precipBtn = "ksb _oMb _pMb";
                this.windBtn = "ksb _oMb";

                //this.ykeys = ['DaytimeHigh', 'MorningLow'];

                //this.labels = ['MorningLow', 'DaytimeHigh'];

                //this.lineColors = ['red', 'yellow'];
                break;
            case "Precipitation":

                this.tempBtn = "ksb _oMb _pMb ";
                this.precipBtn = "ksb _pMb ksbs ";
                this.windBtn = "ksb _oMb";

                //self.ykeys = ['ProbabilityOfPrecipiation'];

                //self.labels = ['Probability O fPrecipiation'];

                //self.lineColors = ['blue'];
                break;

            default:
                alert("An error accrued...., No wind data! ");
        }
       // self.GetGraphByType("Temperature");
    }
}


