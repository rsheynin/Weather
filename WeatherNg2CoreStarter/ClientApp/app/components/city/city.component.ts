import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { City } from '../../models/city/city';
import { CityService } from '../../models/city/city.service';


@Component({
    selector: 'home',
    template: require('./city.component.html'),
    styles: [require('./city.component.css')]
})
export class CityComponent {
    public cities: City[];
    public cityName: string;

    constructor(private http: Http,
        private cityService: CityService) {}

    public GetCities() {
        if (this.cityName.length > 2) {
            //this.http.get('/api/City/GetCitiesByName/' + this.cityName).subscribe(result => {
            //    this.cities = result.json();
            //});
            this.cityService.getCities(this.cityName)
                .subscribe(cities => this.cities = cities);
        }
    }
}
