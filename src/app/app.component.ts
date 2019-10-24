import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  simbolos = ['AAPL', 'AMZN', 'GOOG', 'FB'];
  selectedSimbolo;

  onSelected(simbolo){
    this.selectedSimbolo = simbolo;
  }
}
