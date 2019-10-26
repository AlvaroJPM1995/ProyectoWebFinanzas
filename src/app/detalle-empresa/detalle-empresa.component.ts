import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Empresa } from '../model/empresa';
import { SearchService} from '../service/search.service';
import { TimeSeries } from '../model/timeSeries';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit, OnChanges {

  @Input() empresa:Empresa;
  private json:any;
  datosEmpresa: TimeSeries[];

  constructor(private timeseries: SearchService) { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    for(let sim in changes){
      let cambio = changes[sim];
      if(sim === "empresa"){
        if(cambio.currentValue!=undefined){
          this.buscaDatos(cambio.currentValue.symbol)
        }
      }
    }
  }

  buscaDatos(simbolo){
    this.timeseries.getTimeSeriesDayly2(simbolo).subscribe(data =>{
      this.json = data;
    })
  }
  
}
