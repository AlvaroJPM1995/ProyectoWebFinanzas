import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListasComponent } from './listas/listas.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';
import { CharttestComponent } from './charttest/charttest.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
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
    ListasComponent,
    DetalleEmpresaComponent,
    CharttestComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }