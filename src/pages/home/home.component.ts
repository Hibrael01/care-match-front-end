import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Usuario } from 'src/core/models/usuario.model';
import { RedirectService } from 'src/core/services/redirect/redirect.service';
import { UserLoginService } from 'src/core/services/user-login/user-login.service';
import { UsuarioService } from 'src/core/services/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario : Usuario = new Usuario();
  private login !: string;
  
  constructor(private _redirectService: RedirectService, private _usuarioService: UsuarioService, private _userloginService: UserLoginService) {}

  ngOnInit() : void {
    
    const sub = jwtDecode(this._userloginService.getToken()).sub;

    if(sub) {
      this.login = sub;
    }else{
      this.login = '';
    }

    this._usuarioService.getUsuarioByLogin(this.login).subscribe((res: Usuario) => {

      if(res != null && res.idUsuario != 0){
        this.usuario = res;
        this.usuario.tipoUsuario = 'CUIDADOR';
      }else{
        this._userloginService.doLogout();
        this.redirect('');
      }

    })

  }

  redirect(path: string) {
    this._redirectService.redirect(path);
  }


}
