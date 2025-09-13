import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor (
        private httpClient: HttpClient
    ) {}

    getCurrentDate (date: string) {
        let params = new HttpParams();
        params = params.append('Date: ', date)
        return this.httpClient.get('http://localhost:3000/date',  {params: params})
    }


    getPastDate(pastDate: string) {
        let params = new HttpParams();
        params = params.append('Past Date: ', pastDate)
        return this.httpClient.get('http://localhost:3000/date/past', {params: params})
    }
}