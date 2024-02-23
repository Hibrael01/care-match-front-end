import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCuidadorComponent } from './conta-cuidador.component';

describe('ContaCuidadorComponent', () => {
  let component: ContaCuidadorComponent;
  let fixture: ComponentFixture<ContaCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaCuidadorComponent]
    });
    fixture = TestBed.createComponent(ContaCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
