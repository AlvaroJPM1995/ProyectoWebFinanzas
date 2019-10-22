import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_KEY = "0X3W5Y8986OEIO9L&"
  private BASE_API = 'https://www.alphavantage.co/query';
  private SEARCH_API = this.BASE_API + '?function=SYMBOL_SEARCH';

  constructor(private http: HttpClient) { }

  getSuggestion(keywords: string): Observable<any> {
    const url = `${this.SEARCH_API}&keywords=${keywords}&apikey=${this.API_KEY}`;
    console.log(url);
    return this.http.get(url);
  }
}