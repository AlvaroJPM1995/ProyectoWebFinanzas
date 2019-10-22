import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchComponent } from './search/search.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   declarations: [
      AppComponent,
      HelloComponent,
      SearchComponent,
      ServiceComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
