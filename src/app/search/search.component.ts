import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Name } from "../model/name";
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
  jsonData: any;

  nameData: Name[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  generateList(keywords: string) {
    this.searchService.getSuggestion(keywords).subscribe(data => {
      this.nameData = [];
      this.jsonData = data["bestMatches"];
      for(const item in this.jsonData){
        const symbol =  this.jsonData[item]["1. symbol"];
        const name = this.jsonData[item]["2. name"];
        let symbolName:Name = new Name(symbol, name);
        console.log(symbolName);
        this.nameData.push(symbolName);
      }
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
}
