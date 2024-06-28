import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map } from 'rxjs';
import { formacao } from 'src/core/enums/formacao.enum';
import { unidadeTempo } from 'src/core/enums/unidadeTempo.enum';
import { Cidade } from 'src/core/models/cidade.model';
import { Cuidador } from 'src/core/models/cuidador.model';
import { CuidadorXCertificado } from 'src/core/models/cuidadorXCertificado.model';
import { CuidadorXDisponibilidade } from 'src/core/models/cuidadorXDisponibilidade.model';
import { CuidadorXExperiencia } from 'src/core/models/cuidadorXExperiencia.model';
import { EnderecoCuidador } from 'src/core/models/enderecoCuidador.model';
import { Usuario } from 'src/core/models/usuario.model';
import { CidadeService } from 'src/core/services/cidade/cidade.service';
import { RedirectService } from 'src/core/services/redirect/redirect.service';
import { RegisterFinalizeService } from 'src/core/services/register-finalize/register-finalize.service';

@Component({
  selector: 'app-finalizar-cadastro-procurador',
  templateUrl: './finalizar-cadastro-procurador.component.html',
  styleUrls: ['./finalizar-cadastro-procurador.component.css']
})

export class FinalizarCadastroProcuradorComponent implements OnInit {

  cidades : Cidade[] = [];

  isCalendarTouchUI !: string;
  stepperOrientation: Observable<StepperOrientation>

  //Construtor definindo algumas configuracoes padroes ao carregar a pagina
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private _snackBar: MatSnackBar, private _redirectService: RedirectService,
    private cidadeService: CidadeService, private registerFinalizeService: RegisterFinalizeService) {

  this.stepperOrientation = breakpointObserver
    .observe('(min-width: 1170px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.getCidades();

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

  ngOnInit(): void {
    console.log('ok');
  }

  //Metodo para obter a lista de cidades cadastradas
  private getCidades() {
    this.cidadeService.getCidades().subscribe(response => {
      if(response != null) {
        
        this.cidades = response;

      }
    },error => {
      this._snackBar.open(error,'', {duration:3000})
    })
  }
  
}
