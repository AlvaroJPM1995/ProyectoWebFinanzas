import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

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
   ]
})
export class AppModule { }
