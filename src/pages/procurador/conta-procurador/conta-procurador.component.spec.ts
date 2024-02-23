import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaProcuradorComponent } from './conta-procurador.component';

describe('ContaProcuradorComponent', () => {
  let component: ContaProcuradorComponent;
  let fixture: ComponentFixture<ContaProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaProcuradorComponent]
    });
    fixture = TestBed.createComponent(ContaProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
