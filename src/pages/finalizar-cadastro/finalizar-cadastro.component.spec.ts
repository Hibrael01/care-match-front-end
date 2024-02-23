import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCadastroComponent } from './finalizar-cadastro.component';

describe('FinalizarCadastroComponent', () => {
  let component: FinalizarCadastroComponent;
  let fixture: ComponentFixture<FinalizarCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarCadastroComponent]
    });
    fixture = TestBed.createComponent(FinalizarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
