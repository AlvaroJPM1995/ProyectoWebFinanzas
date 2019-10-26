import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, concatAll, mergeAll, combineAll } from 'rxjs/operators';
import { Empresa } from '../model/empresa';
import { TimeSeries } from '../model/timeSeries';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_KEY = "M889HPMD6E6FF5OQ&"
  private BASE_API = 'https://www.alphavantage.co/query';
  private SYMBOL_SEARCH = this.BASE_API + '?function=SYMBOL_SEARCH';
  private TIME_SERIES_DAYLY = this.BASE_API + '?function=TIME_SERIES_DAILY';

  constructor(private http: HttpClient) { }

  getSuggestion(keywords: string): Observable<Empresa[]> {
    const url = `${this.SYMBOL_SEARCH}&keywords=${keywords}&apikey=${this.API_KEY}`;
    return this.http.get(url)
      .pipe(
        map(data =>  this.parse(data['bestMatches']))
    );
  }

  getTimeSeriesDayly(symbol: string): Observable<Empresa[]> {
    const url = `${this.SYMBOL_SEARCH}&symbol=${symbol}&outputsize=full&apikey=${this.API_KEY}`;
    return this.http.get(url)
      .pipe(
        map(data =>  this.parse(data['bestMatches']))
    );
  }
  getTimeSeriesDayly2(symbol: string): Observable<TimeSeries[]> {
    const url = `${this.TIME_SERIES_DAYLY}&symbol=${symbol}&outputsize=full&apikey=${this.API_KEY}`;
    return this.http.get(url)
      .pipe(
        map(data =>  this.parseTimeSeries(data))
    );
  }

  parse(data): Empresa[] {
    let empresas:Empresa[] = [];
    data.forEach(element => {
      let empresa:Empresa = {
        symbol: element['1. symbol'],
        name: element['2. name'],
        type: element['3. type'],
        region: element['4. region'],
        marketOpen: element['5. marketOpen'],
        marketClose: element['6. marketClose'],
        timezona: element['7. timezona'],
        currency: element['8. currency'],
        matchScore: element['9. matchScore']

      }
      empresas.push(empresa);
    });
    return empresas;
  }
  parseTimeSeries(data):TimeSeries[]{
    return data;
  }
  getDatosGrafica(symbol): Observable<any> {
    const url = `${this.BASE_API}&symbol=${symbol}&interval=5min&apikey=${this.API_KEY}`
    console.log(url);
    return this.http.get(url);
  }
}