import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, concatAll, mergeAll, combineAll } from 'rxjs/operators';
import { Empresa } from '../model/empresa';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_KEY = "0X3W5Y8986OEIO9L&"
  private BASE_API = 'https://www.alphavantage.co/query';
  private SEARCH_API = this.BASE_API + '?function=SYMBOL_SEARCH';

  constructor(private http: HttpClient) { }

  getSuggestion(keywords: string): Observable<Empresa[]> {
    const url = `${this.SEARCH_API}&keywords=${keywords}&apikey=${this.API_KEY}`;
    return this.http.get(url)
      .pipe(
        map(data =>  this.parse(data['bestMatches']))
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
}