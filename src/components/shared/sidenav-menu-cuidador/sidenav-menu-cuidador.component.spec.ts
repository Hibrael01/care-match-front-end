import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuCuidadorComponent } from './sidenav-menu-cuidador.component';

describe('SidenavMenuCuidadorComponent', () => {
  let component: SidenavMenuCuidadorComponent;
  let fixture: ComponentFixture<SidenavMenuCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavMenuCuidadorComponent]
    });
    fixture = TestBed.createComponent(SidenavMenuCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
