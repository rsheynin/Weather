import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from "../../models/weather/IWeather";
import { IWeatherForecast } from "../../models/weather/IWeatherForecast";
import { Const } from "../../models/Const";

//import { GoogleChartComponent } from 'ng2-google-charts';

@Component({
    selector: 'weatherchart',
    template: require('./weatherchart.component.html'),
    styles: [require('./weatherchart.component.css')]
})
export class WeatherChartComponent {
    @Input() weather: IWeather;
    @Input() temperatureUnit: string;
    
    public pieChartOptions = {
        chartType: 'AreaChart',
        dataTable: [
            //['Temperature', 'Day'],
            ////[20, 20],
            ////[21, 25],
            //['Work', 11],
            //['Eat', 2],
            //['Commute', 2],
            //['Watch TV', 2],
            //['Sleep', 7]
        ],
        options: {  },
    };

    ngOnChanges(changes) {
        //console.log("ngOnChanges changes: ",changes);
        //console.log("ngOnChanges forecast: ", this.forecast);
        //this.pieChartOptions.dataTable = this.weather.weeklyForecast;
        //: (string[] | number[])[]
        
        if (changes.weather &&
            changes.weather.currentValue.weeklyForecast &&
            changes.weather.currentValue.weeklyForecast.length > 0) {
            //if ((<any>window) &&
            //    (<any>window).google)
            //    alert("defined");
            //else
            //    alert("is not defined");
            this.MapForcastData(changes.weather.currentValue.weeklyForecast);
            return;
        }

        if (changes.temperatureUnit &&
            changes.temperatureUnit.currentValue != changes.temperatureUnit.previousValue) {
            this.MapForcastData(this.weather.weeklyForecast)
        }
    }

    private MapForcastData(weeklyForecast: IWeatherForecast[]) {
        let dataTable: (string[] | number[])[] = [
            ['Temperature', 'Day'],
        ];
        for (let forecast of weeklyForecast) {
            let date = new Date(forecast.date);
            let temperatur: number = this.GetTemperatureByUnit(forecast.daytimeHigh);
            dataTable.push([date.getDate(), temperatur]);
        }
        this.pieChartOptions.dataTable = dataTable;
        //this.pieChartOptions.options.forceRedrawNow = true;
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
}


