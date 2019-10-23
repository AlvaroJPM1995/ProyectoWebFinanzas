import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-charttest',
  templateUrl: './charttest.component.html',
  styleUrls: ['./charttest.component.css']
})
export class CharttestComponent {
  single: [];
  multi: [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  // line, area
  autoScale = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi})  
  }

  onSelect(event) {
    console.log(event);
  }
}
