import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesCuidadorComponent } from './solicitacoes-cuidador.component';

describe('SolicitacoesCuidadorComponent', () => {
  let component: SolicitacoesCuidadorComponent;
  let fixture: ComponentFixture<SolicitacoesCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitacoesCuidadorComponent]
    });
    fixture = TestBed.createComponent(SolicitacoesCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
