import { TestBed } from '@angular/core/testing';

import { ConexaoCuidadorProcuradorService } from './conexao-cuidador-procurador.service';

describe('ConexaoCuidadorProcuradorService', () => {
  let service: ConexaoCuidadorProcuradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoCuidadorProcuradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
