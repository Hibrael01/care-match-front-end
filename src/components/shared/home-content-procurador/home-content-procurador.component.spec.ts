import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentProcuradorComponent } from './home-content-procurador.component';

describe('HomeContentProcuradorComponent', () => {
  let component: HomeContentProcuradorComponent;
  let fixture: ComponentFixture<HomeContentProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContentProcuradorComponent]
    });
    fixture = TestBed.createComponent(HomeContentProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
