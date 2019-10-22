import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit {
@Input() empresa;
  constructor() { }

  ngOnInit() {
  }

}
