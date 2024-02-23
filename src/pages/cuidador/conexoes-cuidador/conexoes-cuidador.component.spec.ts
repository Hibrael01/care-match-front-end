import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexoesCuidadorComponent } from './conexoes-cuidador.component';

describe('ConexoesCuidadorComponent', () => {
  let component: ConexoesCuidadorComponent;
  let fixture: ComponentFixture<ConexoesCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConexoesCuidadorComponent]
    });
    fixture = TestBed.createComponent(ConexoesCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
