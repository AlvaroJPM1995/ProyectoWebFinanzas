import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { EmpresaService } from '../service/empresa_servico.service';
import { GlobalQuote } from '../model/global-quote';
import { EMPRESAS } from '../listas';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class  ListasComponent  implements OnInit{
  empresas = EMPRESAS;
  datos_json: any;
  simbolos_empresa: String[] = ['AAPL', 'AMZN', 'GOOG', 'EBAY'];
  datos_consulta: GlobalQuote[] = [];
  quoteDataLoaded = true;
  intervalo_tiempo = timer(1000, 1000);
  tiempo_refresco = 120;
  tiempo_actual = 120;

  constructor(private empresaService: EmpresaService) {}
  
  refrescarLista() :void{
    this.datos_consulta = [];
    for (const symbol of this.simbolos_empresa){
      this.busquedaDatos(symbol);
    }
  }

  ngOnInit(){
    this.intervalo_tiempo.subscribe(x => {
      this.tiempo_refresco = this.tiempo_actual - x % this.tiempo_actual;
      if(x%this.tiempo_actual==0){
        this.refrescarLista();}
      });
    }

    busquedaDatos(symbol){
      this.empresaService.getempresa(symbol).subscribe(data => {
      const symbolName: string = data['Global Quote']['01. symbol'];
      const currentPrice: string = data['Global Quote']['05. price'];
      const change: string = data['Global Quote']['09. change'];
      const changePercent: string = data['Global Quote']['10. change percent'];


      const hasIncreased: boolean = (change.toString().slice(0, 1) === '-') ? false : true;
      const globalQuote: GlobalQuote = new GlobalQuote(symbolName, currentPrice, change, changePercent, hasIncreased);
      console.log(globalQuote);
      this.datos_consulta.push(globalQuote);
      this.quoteDataLoaded = true;
      })
    }
    
  }

