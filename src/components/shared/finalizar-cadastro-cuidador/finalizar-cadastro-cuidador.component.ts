import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StepperOrientation } from '@angular/material/stepper';
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

const USER_INFO : string = 'userInfo';

@Component({
  selector: 'app-finalizar-cadastro-cuidador',
  templateUrl: './finalizar-cadastro-cuidador.component.html',
  styleUrls: ['./finalizar-cadastro-cuidador.component.css']
})
export class FinalizarCadastroCuidadorComponent implements OnInit {

  cuidador : Cuidador = new Cuidador();
  unidadeTempoOptions = Object.keys(unidadeTempo).slice(0,-1);
  formacaoOptions = Object.keys(formacao);
  cidades : Cidade[] = [];
  cuidadorXExperiencia : CuidadorXExperiencia = new CuidadorXExperiencia();
  cuidadorXCertificado : CuidadorXCertificado = new CuidadorXCertificado();

  isCalendarTouchUI !: string;
  stepperOrientation: Observable<StepperOrientation>

  /*===================== FORM FIELDS =====================*/
  infoCuidador = this._formBuilder.group({
    descricaoCuidador: ['', Validators.required],
    tempoExp: ['', Validators.required],
    unidadeTempo: ['', Validators.required],
    formacao: ['', Validators.required],
    atendeCasa: ['', Validators.required],
  });

  enderecoCuidador = this._formBuilder.group({
    logradouro: ['', Validators.required],
    bairro: ['', Validators.required],
    complemento: ['', Validators.required],
    cep: ['', Validators.required],
    acessivel: ['', Validators.required]
  });

  disponibilidadeCuidador = this._formBuilder.group({
    horaInicioSeg: ['', Validators.required],
    horaFimSeg: ['', Validators.required],
    diaInteiroSeg: ['', Validators.required],
    horaInicioTer: ['', Validators.required],
    horaFimTer: ['', Validators.required],
    diaInteiroTer: ['', Validators.required],
    horaInicioQua: ['', Validators.required],
    horaFimQua: ['', Validators.required],
    diaInteiroQua: ['', Validators.required],
    horaInicioQui: ['', Validators.required],
    horaFimQui: ['', Validators.required],
    diaInteiroQui: ['', Validators.required],
    horaInicioSex: ['', Validators.required],
    horaFimSex: ['', Validators.required],
    diaInteiroSex: ['', Validators.required]
  });

  experienciaCuidador = this._formBuilder.group({
    dtInicio: ['', Validators.required],
    dtFinal: ['', Validators.required],
    descricao: ['', Validators.required],
    local: ['', Validators.required],
    qtdPessoas: ['', Validators.required]
  });

  certificadoCuidador = this._formBuilder.group({
    dtInicial: ['', Validators.required],
    dtFinal: ['', Validators.required],
    instituicao: ['', Validators.required],
    linkCertificado: ['', Validators.required]
  });
  /*=======================================================*/

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
    const userInfo : string | null = localStorage.getItem(USER_INFO);
     
    let usuario : Usuario;
    if(userInfo != null) {
      usuario = JSON.parse(userInfo);
    }else{
      usuario = new Usuario();
    }

    this.cuidador.usuario = usuario;
    this.inicializarEntidades();

  }

  private getCidades() {
    this.cidadeService.getCidades().subscribe(response => {
      if(response != null) {
        
        this.cidades = response;

      }
    },error => {
      this._snackBar.open(error,'', {duration:3000})
    })
  }

  finalizaCadastro() {

    //Validações
    if(this.cuidador != null) {

      if(this.cuidador.enderecoCuidador == null || this.cuidador.enderecoCuidador.acessivel == null || 
         this.cuidador.enderecoCuidador.bairro == null || this.cuidador.enderecoCuidador.bairro.length == 0 ||
         this.cuidador.enderecoCuidador.cep == null || this.cuidador.enderecoCuidador.cep.length == 0 ||
         this.cuidador.enderecoCuidador.cidade == null || this.cuidador.enderecoCuidador.logradouro == null || this.cuidador.enderecoCuidador.logradouro.length == 0) {
          
          this._snackBar.open('Informe os dados de Endereço!', 'OK', {duration: 3000});
          return;

         }
      
      if(this.cuidadorXExperiencia == null || this.cuidadorXExperiencia.dataFinal == null || this.cuidadorXExperiencia.dataInicial == null ||
         this.cuidadorXExperiencia.descricao == null || this.cuidadorXExperiencia.descricao.length == 0 ||
         this.cuidadorXExperiencia.local == null || this.cuidadorXExperiencia.local.length == 0) {

          this._snackBar.open('Informe os dados da Experiência!', 'OK', {duration: 3000});
          return;

      }

      if(this.cuidadorXExperiencia.dataInicial > this.cuidadorXExperiencia.dataFinal) {
        this._snackBar.open('A Data Inicial da Experiência não deve ser superior à Data Final!', 'OK', {duration: 3000});
        return;
      }

      if(this.cuidadorXCertificado == null || this.cuidadorXCertificado.dataFinal == null || this.cuidadorXCertificado.dataFinal == null ||
         this.cuidadorXCertificado.instituicao == null || this.cuidadorXCertificado.instituicao.length == 0 ||
         this.cuidadorXCertificado.linkCertificado == null || this.cuidadorXCertificado.linkCertificado.length == 0) {

          this._snackBar.open('Informe os dados do Certificado!', 'OK', {duration: 3000});
          return;

         } 

      if(this.cuidadorXCertificado.dataInicial > this.cuidadorXCertificado.dataFinal) {
        this._snackBar.open('A Data Inicial do Certificado não deve ser superior à Data Final!', 'OK', {duration: 3000});
        return;
      }   


      let cuidadorAEnviar : Cuidador = this.cuidador;

      let cuidadorVar : Cuidador = new Cuidador();
      cuidadorVar.idCuidador = this.cuidador.idCuidador;
      cuidadorVar.usuario = this.cuidador.usuario;

      //Removendo formatação do cep
      cuidadorAEnviar.enderecoCuidador.cep = this.cuidador.enderecoCuidador.cep.replace('-', '');
      cuidadorAEnviar.enderecoCuidador.cuidador = cuidadorVar;

      this.cuidador.lstExperiencia = new Array<CuidadorXExperiencia>();
      this.cuidador.lstCertificados = new Array<CuidadorXCertificado>();

      this.cuidadorXExperiencia.cuidador = cuidadorVar;
      this.cuidadorXCertificado.cuidador = cuidadorVar;
      cuidadorAEnviar.lstExperiencia.push(this.cuidadorXExperiencia);
      cuidadorAEnviar.lstCertificados.push(this.cuidadorXCertificado);

      let formacaoKey: keyof typeof formacao = this.cuidador.formacao as keyof typeof formacao;
      let unidadeKey: keyof typeof unidadeTempo = this.cuidador.unidadeTempo as keyof typeof unidadeTempo;

      cuidadorAEnviar.formacao = formacao[formacaoKey];
      cuidadorAEnviar.unidadeTempo = unidadeTempo[unidadeKey];


      this.registerFinalizeService.finalizaCadastroCuidador(cuidadorAEnviar).subscribe(response => {
        console.log(response);
        if(response != null && response.idCuidador != 0){
          cuidadorAEnviar = response;
          console.log(cuidadorAEnviar);

          this._snackBar.open('Cadastro Realizado com Sucesso. Seja Bem-Vindo!', '', {duration: 3000});

          this._redirectService.redirect('home');
        }

      })

    }
  }

  private inicializarEntidades() {
    this.cuidador.enderecoCuidador = new EnderecoCuidador();
    this.cuidador.lstDisponibilidade = new Array<CuidadorXDisponibilidade>();
    this.cuidador.lstExperiencia = new Array<CuidadorXExperiencia>();
    this.cuidador.lstCertificados = new Array<CuidadorXCertificado>();


    let cuidadorDisponibilidade : Cuidador = new Cuidador();
    cuidadorDisponibilidade.idCuidador = this.cuidador.idCuidador;
    cuidadorDisponibilidade.usuario = this.cuidador.usuario;
    console.log(cuidadorDisponibilidade);
    for(let i=0; i<5; i++) {
      let disponibilidade : CuidadorXDisponibilidade = new CuidadorXDisponibilidade();
      disponibilidade.diaInteiro = 'N'; 
      disponibilidade.cuidador = cuidadorDisponibilidade;

      switch(i) {
        case i = 0: {
          disponibilidade.diaSemana = 'SE';
          break;
        }
        case i = 1: {
          disponibilidade.diaSemana = 'TE';
          break;
        }
        case i = 2: {
          disponibilidade.diaSemana = 'QA';
          break;
        }
        case i = 3: {
          disponibilidade.diaSemana = 'QI';
          break;
        }
        case i = 4: {
          disponibilidade.diaSemana = 'SX';
          break;
        }
        default: {
          break;
        }
      }


      this.cuidador.lstDisponibilidade.push(disponibilidade);
    }
  }

  teste() {
    console.log(this.cuidador)
  }

}
