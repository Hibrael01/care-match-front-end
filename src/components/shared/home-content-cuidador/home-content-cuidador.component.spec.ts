import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentCuidadorComponent } from './home-content-cuidador.component';

describe('HomeContentCuidadorComponent', () => {
  let component: HomeContentCuidadorComponent;
  let fixture: ComponentFixture<HomeContentCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContentCuidadorComponent]
    });
    fixture = TestBed.createComponent(HomeContentCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
