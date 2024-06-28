import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cuidador } from 'src/core/models/cuidador.model';
import { Procurador } from 'src/core/models/procurador.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterFinalizeService {
  
  private finalizaCadastroCuidadorUrl: string = 'http://localhost:8080/cuidador/finalizaCadastro';
  private finalizaCadastroProcuradorUrl: string = 'http://localhost:8080/procurador/finalizaCadastro';

  constructor(private http: HttpClient) {}

  finalizaCadastroCuidador(cuidador: Cuidador) : Observable<Cuidador> {
    return this.http.post<Cuidador>(this.finalizaCadastroCuidadorUrl, cuidador).pipe(
      catchError(this.handleError)
    );
  }

  finalizaCadastroProcurador(procurador: Procurador) : Observable<Procurador> {
    return this.http.post<Procurador>(this.finalizaCadastroProcuradorUrl, procurador).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // O backend retornou um código de status de erro
      console.error(`Código de erro ${error.status}, ` + `mensagem: ${error.error}`);
    }
    // Retorna um observable com uma mensagem de erro amigável
    return throwError('Não foi possível concluir o cadastro, verifique seus dados!.');
  }
}
