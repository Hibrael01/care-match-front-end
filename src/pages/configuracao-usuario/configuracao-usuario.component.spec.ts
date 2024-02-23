import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoUsuarioComponent } from './configuracao-usuario.component';

describe('ConfiguracaoUsuarioComponent', () => {
  let component: ConfiguracaoUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracaoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracaoUsuarioComponent]
    });
    fixture = TestBed.createComponent(ConfiguracaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
