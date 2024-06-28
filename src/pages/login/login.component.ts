import { Component, Inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Usuario } from 'src/core/models/usuario.model';
import { RedirectService } from 'src/core/services/redirect/redirect.service';
import { UserLoginService } from 'src/core/services/user-login/user-login.service';
import { UsuarioService } from 'src/core/services/usuario/usuario.service';

export interface RecoverPasswordDialogData {
  recoverEmail : string;
  usuario : Usuario;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario : Usuario = new Usuario();
  hide : boolean = true;
  recoverEmail : string = '';
  

  infoLogin = this._formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  })

  constructor(private _formBuilder: FormBuilder, private loginService: UserLoginService, private _snackBar: MatSnackBar, public recoverPasswordDialog: MatDialog, private _redirectService: RedirectService, private _usuarioService: UsuarioService) {

  }

  realizarLogin() {
    this.usuario.login = this.usuario.login.trim();
    this.loginService.doLogin(this.usuario).subscribe(response => {

      if(response != null){

        const token : string = response.token;

        this.loginService.setToken(token);

        this._snackBar.open('Login Realizado Com Suceso!','', {duration:3000});
        setTimeout(() => {this._redirectService.redirect('home')}, 1000);
      }else{
         this._snackBar.open('Não foi possível realizar o Login, verifique os dados!', '', {duration:3000});
      }
      this.gerarPerfilUsuario(this.usuario.login);
    }, error => {
        this._snackBar.open(error,'', {duration:3000})
    })

  }

  private gerarPerfilUsuario(login: string) {
    this._usuarioService.getUsuarioByLogin(login).subscribe(response => {

      if(response != null) {
        const usuarioInfo : Usuario = new Usuario();
        usuarioInfo.idUsuario = response.idUsuario;
        usuarioInfo.nome = response.nome;
        usuarioInfo.sobrenome = response.sobrenome;
        usuarioInfo.tipoUsuario = response.tipoUsuario;
        usuarioInfo.login = response.login;

        let userInfo : string = JSON.stringify(usuarioInfo);

        if(userInfo != null && userInfo.length > 0){
          localStorage.setItem('userInfo', userInfo);
        }
      }

    })
  }
 
  redirect(path: string) {
    this._redirectService.redirect(path);
  }

  openRecoverPasswordDialog(): void {
    const dialogRef = this.recoverPasswordDialog.open(RecoverPasswordDialog, {
      width: '400px',
      data: {recoverEmail: this.recoverEmail, usuario: this.usuario},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.recoverEmail = result;
      if(this.recoverEmail != null && this.recoverEmail.length > 0){
        this._snackBar.open('Email de recuperação:' + this.recoverEmail, 'Ok!');
      }
      
    });
  }

 
}

@Component({
  selector: 'forgot-password-dialog',
  templateUrl: 'forgot-password-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
})

export class RecoverPasswordDialog {
  constructor(
    public dialogRef: MatDialogRef<RecoverPasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RecoverPasswordDialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


