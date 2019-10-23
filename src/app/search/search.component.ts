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

  nameData: Empresa[];

  constructor(private searchService: SearchService) { }

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
    this.sendSymbol();
  }

  sendSymbol() {
    if(this.symbol != "")
      this.symbolEvent.emit(this.symbol);
  }
}
