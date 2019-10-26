import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from "../model/empresa";
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() symbolEvent = new EventEmitter<string>();

  isHidden = true;
  symbol: string = "";
  selectedEmpresa:Empresa;
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

  constructor(private timeseries: SearchService, private searchService: SearchService) { }

  nameData: Empresa[];

  ngOnInit() {
  }

  generateList(keywords: string) {
    this.searchService.getSuggestion(keywords).subscribe(data => {
      this.nameData = data;
      this.isHidden = (this.isHidden == true && this.nameData.length > 0) ? false : true;
    });
  }

  

  populateSearch(value: string){
    this.symbol = value;
    this.isHidden = (this.isHidden == true) ? false : true;
    this.share();
  }

  /*sendSymbol() {
    if(this.symbol != "")
      this.symbolEvent.emit(this.symbol);
  }*/
  share() {
    window.alert('Esto funciona correctamente');
  }
  onSelected(empresa){
  this.selectedEmpresa = empresa;
  this.isHidden= !this.isHidden;
  }

  fetchData(symbol) {

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
