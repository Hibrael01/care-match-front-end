import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/core/models/usuario.model';
import { RedirectService } from 'src/core/services/redirect/redirect.service';
import { UserLoginService } from 'src/core/services/user-login/user-login.service';

@Component({
  selector: 'app-sidenav-menu-cuidador',
  templateUrl: './sidenav-menu-cuidador.component.html',
  styleUrls: ['./sidenav-menu-cuidador.component.css']
})
export class SidenavMenuCuidadorComponent {

  usuario : Usuario = new Usuario();
  
  constructor(private _redirectService: RedirectService, private _userService: UserLoginService, private _snackBar: MatSnackBar) {
    this.usuario.nome = 'Hibrael'
  }

  redirect(path: string) {
    this._redirectService.redirect(path);
  }

  doLogout() {
    if(this._userService.doLogout()){
      this._redirectService.redirect('login');
      this._snackBar.open('Obrigado por usar o Care-Match!', '', {duration:3000})
    }
  }

}
