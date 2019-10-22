/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Empresa_servicoService } from './empresa_servico.service';

describe('Service: Empresa_servico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Empresa_servicoService]
    });
  });

  it('should ...', inject([Empresa_servicoService], (service: Empresa_servicoService) => {
    expect(service).toBeTruthy();
  }));
});
