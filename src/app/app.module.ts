import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   declarations: [
      AppComponent,
      SearchComponent
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [SearchService],
})
export class AppModule { }
