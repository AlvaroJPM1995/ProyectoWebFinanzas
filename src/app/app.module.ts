import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';
import { CharttestComponent } from './charttest/charttest.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListasComponent } from './listas/listas.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgxChartsModule,
      RouterModule.forRoot([
        { path: '', component: ListasComponent },
    ])
   ],
   declarations: [
      AppComponent,
      SearchComponent,
      DetalleEmpresaComponent,
      ListasComponent,
      CharttestComponent
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [SearchService],
})
export class AppModule { }