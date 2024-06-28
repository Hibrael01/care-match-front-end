import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Usuario } from 'src/core/models/usuario.model';
import { TiposUsuario } from 'src/core/enums/tipousuario.enum';
import { UserRegisterService } from 'src/core/services/user-register/user-register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RedirectService } from 'src/core/services/redirect/redirect.service';
import { UserLoginService } from 'src/core/services/user-login/user-login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {

  usuario: Usuario = new Usuario();
  dtNascimento = new FormControl(new Date());
  hide: boolean = true;

  isCalendarTouchUI!: string;

  dadosPessoais = this._formBuilder.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    dtNascimento: ['', Validators.required],
    telefone: ['', Validators.required]
  });

  infoLogin = this._formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
    tipoUsuario: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  email = new FormControl('', [Validators.required, Validators.email]);

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private registerService: UserRegisterService, private _snackBar: MatSnackBar, private _redirectService: RedirectService, private _loginService: UserLoginService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 720px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

      if(window.innerWidth <= 720){
        this.isCalendarTouchUI = 'true';
      }else{
        this.isCalendarTouchUI = 'false'
      }
      
  }

  @HostListener("window:resize", []) alteraTouchUI() {
    if(window.innerWidth <= 720){
      this.isCalendarTouchUI = 'true';
    }else{
      this.isCalendarTouchUI = 'false'
    }
  }

  getEmailErrorMessage() {
    if (this.infoLogin.get('email')?.hasError('required')) {
      return 'Por favor informe seu email!';
    }else if(this.infoLogin.get('email')?.hasError('email')){
      return 'Email informado não é valido!'
    }else{
      return ''
    }
  }
  
  registrarNovoUsuario() {
    this.registerService.createNewUser(this.usuario).subscribe((res: Usuario) => {
      
      if(res.idUsuario > 0){
        this._snackBar.open('Usuário Cadastrado com Sucesso!', '', {duration:3000});
        this.usuario.idUsuario = res.idUsuario;
        //Realiza Login para obter token de acesso para que possa realizar o cadastro
        this.usuario.login = this.usuario.login.trim();
        this._loginService.doLogin(this.usuario).subscribe(response => {

          if(response != null){

            const token : string = response.token;
    
            this._loginService.setToken(token);
            
            //Salva os dados do usuário no LocalStorage para continuar o cadastro nas telas de finalizações
            const usuarioInfo : Usuario = new Usuario();
            usuarioInfo.idUsuario = this.usuario.idUsuario;
            usuarioInfo.nome = this.usuario.nome;
            usuarioInfo.sobrenome = this.usuario.sobrenome;
            usuarioInfo.tipoUsuario = this.usuario.tipoUsuario
            usuarioInfo.login = this.usuario.login;

            console.log(usuarioInfo);
            console.log(this.usuario);
            
            let userInfo : string = JSON.stringify(usuarioInfo);

            if(userInfo != null && userInfo.length > 0){
              localStorage.setItem('userInfo', userInfo);
              this._redirectService.redirect('register/finalize')
            }else{
              this._snackBar.open('Não foi possível concluir o Cadastro. Tente novamente mais tarde!', '', {duration:3000});
            }

          }else{
             this._snackBar.open('Não foi possível realizar o Login, verifique os dados!', '', {duration:3000});
          }

        })

      }else{
        this._snackBar.open('Não foi possível concluir o cadastro, verifique seus dados!', 'Ok')
      }

    }, error => {this._snackBar.open(error, undefined, {duration:3000})})
  }

  redirect(path: string) {
    this._redirectService.redirect(path);
  }

}
