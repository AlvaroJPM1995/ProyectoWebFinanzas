import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListasComponent } from './listas/listas.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListasComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ListasComponent,
    DetalleEmpresaComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }