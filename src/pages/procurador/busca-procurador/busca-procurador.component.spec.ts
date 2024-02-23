import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaProcuradorComponent } from './busca-procurador.component';

describe('BuscaProcuradorComponent', () => {
  let component: BuscaProcuradorComponent;
  let fixture: ComponentFixture<BuscaProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaProcuradorComponent]
    });
    fixture = TestBed.createComponent(BuscaProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
