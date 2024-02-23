import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesProcuradorComponent } from './solicitacoes-procurador.component';

describe('SolicitacoesProcuradorComponent', () => {
  let component: SolicitacoesProcuradorComponent;
  let fixture: ComponentFixture<SolicitacoesProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitacoesProcuradorComponent]
    });
    fixture = TestBed.createComponent(SolicitacoesProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
