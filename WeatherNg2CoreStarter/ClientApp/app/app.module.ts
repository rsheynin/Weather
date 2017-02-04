import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { CityComponent } from './components/city/city.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeeklyForecastComponent } from './components/weeklyforecast/weeklyforecast.component';
import { WeeklyDayForecastComponent } from './components/weeklydayforecast/weeklydayforecast.component';
import { DayForeCastComponent } from './components/dayforecast/dayforecast.component';
import { WeeklyForecastGraphComponent } from './components/weeklyforecastgraph/weeklyforecastgraph.component';
import { WeatherChartComponent } from './components/weatherchart/weatherchart.component';
import { CityService } from './models/city/city.service';
import { WeatherService } from './models/weather/weather.service';
import { Ng2GoogleChartsModule, GoogleChartComponent } from 'ng2-google-charts';



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        WeatherComponent,
        DayForeCastComponent,
        WeeklyForecastComponent,
        WeeklyDayForecastComponent,
        WeeklyForecastGraphComponent,
        WeatherChartComponent,
        CityComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'city', pathMatch: 'full' },
            { path: 'city', component: CityComponent },
            { path: 'weather/:zip', component: WeatherComponent },
            { path: '**', redirectTo: 'city' }
        ]),
        Ng2GoogleChartsModule
    ],
    providers: [
        CityService,
        WeatherService
    ]
})
export class AppModule {
}
