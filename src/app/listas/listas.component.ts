import { Component, OnInit } from '@angular/core';
import { EMPRESAS } from '../listas';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class  ListasComponent {
 empresas = EMPRESAS;
}