/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Datos_graficaService } from './datos_grafica.service';

describe('Service: Datos_grafica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Datos_graficaService]
    });
  });

  it('should ...', inject([Datos_graficaService], (service: Datos_graficaService) => {
    expect(service).toBeTruthy();
  }));
});
