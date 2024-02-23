import { ErrorHandler, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { RootComponent } from 'src/components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from 'src/pages/register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { LoginComponent } from 'src/pages/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptorInterceptor } from '../services/custom-interceptor.interceptor';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from 'src/pages/home/home.component';
import { AuthErrorHandler } from '../options/auth-error-handler';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { ConexoesCuidadorComponent } from 'src/pages/cuidador/conexoes-cuidador/conexoes-cuidador.component';
import { ContaCuidadorComponent } from 'src/pages/cuidador/conta-cuidador/conta-cuidador.component';
import { SolicitacoesCuidadorComponent } from 'src/pages/cuidador/solicitacoes-cuidador/solicitacoes-cuidador.component';
import { BuscaProcuradorComponent } from 'src/pages/procurador/busca-procurador/busca-procurador.component';
import { ContaProcuradorComponent } from 'src/pages/procurador/conta-procurador/conta-procurador.component';
import { ConexoesProcuradorComponent } from 'src/pages/procurador/conexoes-procurador/conexoes-procurador.component';
import { SolicitacoesProcuradorComponent } from 'src/pages/procurador/solicitacoes-procurador/solicitacoes-procurador.component';
import { ConfiguracaoUsuarioComponent } from 'src/pages/configuracao-usuario/configuracao-usuario.component';
import { SidenavMenuCuidadorComponent } from 'src/components/shared/sidenav-menu-cuidador/sidenav-menu-cuidador.component';
import { SidenavMenuProcuradorComponent } from 'src/components/shared/sidenav-menu-procurador/sidenav-menu-procurador.component';
import { HomeContentCuidadorComponent } from 'src/components/shared/home-content-cuidador/home-content-cuidador.component';
import { HomeContentProcuradorComponent } from 'src/components/shared/home-content-procurador/home-content-procurador.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FinalizarCadastroComponent } from 'src/pages/finalizar-cadastro/finalizar-cadastro.component';

@NgModule({
  declarations: [RootComponent, LoginComponent, RegisterComponent, HomeComponent, ConexoesCuidadorComponent,ContaCuidadorComponent,       
                 SolicitacoesCuidadorComponent, BuscaProcuradorComponent, ConexoesProcuradorComponent, ContaProcuradorComponent,
                 SolicitacoesProcuradorComponent, ConfiguracaoUsuarioComponent, SidenavMenuCuidadorComponent,
                 SidenavMenuProcuradorComponent, HomeContentCuidadorComponent, HomeContentProcuradorComponent,
                 FinalizarCadastroComponent,],
  imports: [CommonModule, FormsModule, BrowserModule, AppRouterModule, MatButtonModule, MatIconModule, MatStepperModule,
            NgSwitch, NgSwitchCase, ReactiveFormsModule, MatFormFieldModule, MatInputModule, AsyncPipe, BrowserAnimationsModule,
            MatDatepickerModule, MatNativeDateModule, NgxMaskDirective, MatSelectModule, HttpClientModule, MatSnackBarModule, 
            MatCardModule, MatDialogModule, MatToolbarModule, MatSidenavModule, MatDividerModule, MatExpansionModule,
            MatListModule, MatGridListModule],
  providers: [{provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}}, 
              {
                provide: MAT_DATE_LOCALE, 
                useValue: 'pt-BR'
              }, 
              provideNgxMask({dropSpecialCharacters: false, }),
              {
                provide: HTTP_INTERCEPTORS, 
                useClass: CustomInterceptorInterceptor, 
                multi: true},
              {
                provide: ErrorHandler,
                useClass: AuthErrorHandler
              }],
  bootstrap: [RootComponent]
})
export class AppModule {}
