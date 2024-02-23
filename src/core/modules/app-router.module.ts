import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from 'src/components/root/root.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { AuthGuard } from '../guards/autenticacao/auth.guard';
import { ConexoesCuidadorComponent } from 'src/pages/cuidador/conexoes-cuidador/conexoes-cuidador.component';
import { ContaCuidadorComponent } from 'src/pages/cuidador/conta-cuidador/conta-cuidador.component';
import { SolicitacoesCuidadorComponent } from 'src/pages/cuidador/solicitacoes-cuidador/solicitacoes-cuidador.component';
import { BuscaProcuradorComponent } from 'src/pages/procurador/busca-procurador/busca-procurador.component';
import { ConexoesProcuradorComponent } from 'src/pages/procurador/conexoes-procurador/conexoes-procurador.component';
import { ContaProcuradorComponent } from 'src/pages/procurador/conta-procurador/conta-procurador.component';
import { SolicitacoesProcuradorComponent } from 'src/pages/procurador/solicitacoes-procurador/solicitacoes-procurador.component';
import { ConfiguracaoUsuarioComponent } from 'src/pages/configuracao-usuario/configuracao-usuario.component';
import { FinalizarCadastroComponent } from 'src/pages/finalizar-cadastro/finalizar-cadastro.component';

export const routes: Routes = [
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'register/finalize',
    component: FinalizarCadastroComponent
  },
  {
    path: 'home', 
    component: HomeComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'conexoes/cuidador',
    component: ConexoesCuidadorComponent,
  },
  {
    path: 'conta/cuidador',
    component: ContaCuidadorComponent,
  },
  {
    path: 'solicitacoes/cuidador',
    component: SolicitacoesCuidadorComponent,
  },
  {
    path: 'buscar/procurador',
    component: BuscaProcuradorComponent,
  },
  {
    path: 'conexoes/procurador',
    component: ConexoesProcuradorComponent,
  },
  {
    path: 'conta/procurador',
    component: ContaProcuradorComponent,
  },
  {
    path: 'solicitacoes/procurador',
    component: SolicitacoesProcuradorComponent,
  },
  {
    path: 'configuracao',
    component: ConfiguracaoUsuarioComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRouterModule {}
