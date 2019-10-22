import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class EmpresaService {
    private CLAVE_LIBRERIA = '0X3W5Y8986OEIO9L&';
    private BASE = 'https://www.alphavantage.co/query';
    private URL_PETICION_DATOS_GLOBALES = this.BASE + '?function=GLOBAL_QUOTE';

    constructor(private http: HttpClient){}
    getempresa(simbolo_empresa): Observable<any> {
        const url = `${this.URL_PETICION_DATOS_GLOBALES}&symbol=${simbolo_empresa}&apikey=${this.CLAVE_LIBRERIA}`;
        console.log(url);
        return this.http.get(url).pipe(tap(data=>console.log(data)));
    }
    
}