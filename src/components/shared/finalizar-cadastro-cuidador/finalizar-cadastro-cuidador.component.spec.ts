import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCadastroCuidadorComponent } from './finalizar-cadastro-cuidador.component';

describe('FinalizarCadastroCuidadorComponent', () => {
  let component: FinalizarCadastroCuidadorComponent;
  let fixture: ComponentFixture<FinalizarCadastroCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarCadastroCuidadorComponent]
    });
    fixture = TestBed.createComponent(FinalizarCadastroCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
