import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Datos_graficaService } from '../service/datos_grafica.service';

@Component({
  selector: 'app-charttest',
  templateUrl: './charttest.component.html',
  styleUrls: ['./charttest.component.css']
})
export class CharttestComponent implements OnInit, OnChanges {

  @Input() simbolo: string;

  jsonData: any;
  chartData: any[] = [{
    name: '',
    series: []
  }];
  chartDataLoaded = false;
  xAxisTicks: any[] = [] 

  colorScheme = {
    domain: ['#E20C13', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private timeseries: Datos_graficaService) { }

  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      let change = changes[propName];
      if (propName === 'symbol') {
        if(change.currentValue != undefined) // call iff updated value is undefined
          this.busquedaDatos(change.currentValue)
      }
    }
  }

  ngOnInit() {
    this.busquedaDatos("FB");
  }

  busquedaDatos(symbol) {

    // call the service to fetch intraday data
    this.timeseries.getDatosGrafica(symbol).subscribe(data => {
      this.jsonData = data["Time Series (5min)"];
      // clear the dataset
      this.chartData = [{
        name: '',
        series: []
      }];
      this.xAxisTicks = [];
      // fetch the ticker symbol from the HTTP JSON response
      this.chartData[0].name = data["Meta Data"]["2. Symbol"];
      let i = 1;
      for (const item in this.jsonData) {

        // display only 5 data points on X-Axis
        if (i == 1 || i % 25 == 0)
          this.xAxisTicks.push(item);
        i++;

        // fetch the dataset symbol from the HTTP JSON response
        this.chartData[0].series.push({
          name: item,
          value: this.jsonData[item]["4. close"]
        })
      }

      // JSON response from Alpha Vantage is in reverse chronological order
      this.chartData[0].series.reverse();
      this.xAxisTicks.reverse();

      // boolean for loading chart
      this.chartDataLoaded = true;
    });
  }

}