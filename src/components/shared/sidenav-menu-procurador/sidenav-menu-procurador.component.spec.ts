import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuProcuradorComponent } from './sidenav-menu-procurador.component';

describe('SidenavMenuProcuradorComponent', () => {
  let component: SidenavMenuProcuradorComponent;
  let fixture: ComponentFixture<SidenavMenuProcuradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavMenuProcuradorComponent]
    });
    fixture = TestBed.createComponent(SidenavMenuProcuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
