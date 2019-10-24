import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Datos_graficaService {
  private CLAVE_LIBRERIA = '4VA538VDHX35PW36&';
  private BASE = 'https://www.alphavantage.co/query';
  private URL_PETICION_DATOS_GRAFICA = this.BASE + '?function=TIME_SERIES_INTRADAY';


constructor(private http: HttpClient) { }

getDatosGrafica(symbol): Observable<any> {
  const url = `${this.URL_PETICION_DATOS_GRAFICA}&symbol=${symbol}&interval=5min&apikey=${this.CLAVE_LIBRERIA}`
  console.log(url);
  return this.http.get(url).pipe(tap(data=>console.log(data)));
}

}
