import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCadastroProcuradorComponent } from './finalizar-cadastro-procurador.component';

describe('FinalizarCadastroProcuradorComponent', () => {
  let component: FinalizarCadastroProcuradorComponent;
  let fixture: ComponentFixture<FinalizarCadastroProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarCadastroProcuradorComponent]
    });
    fixture = TestBed.createComponent(FinalizarCadastroProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
