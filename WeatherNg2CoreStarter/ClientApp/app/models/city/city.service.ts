import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { City } from './City';

@Injectable()
export class CityService {

    constructor(private http: Http) { }

    public getCities(cityName: string) : Observable<City[]> 
    {
        return this.http
            .get('/api/City/GetCitiesByName/' + cityName)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getCityByZip(zip: string): Observable<City> {
        return this.http
            .get('/api/City/GetCityByZip/' + zip)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
