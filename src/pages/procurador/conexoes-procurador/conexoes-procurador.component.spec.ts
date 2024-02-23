import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexoesProcuradorComponent } from './conexoes-procurador.component';

describe('ConexoesProcuradorComponent', () => {
  let component: ConexoesProcuradorComponent;
  let fixture: ComponentFixture<ConexoesProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConexoesProcuradorComponent]
    });
    fixture = TestBed.createComponent(ConexoesProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
