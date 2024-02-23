import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from 'src/core/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private usuarioUrl: string = 'http://localhost:8080/usuario/login';

  constructor(private http: HttpClient) { }

  getUsuarioByLogin(login: string): Observable<Usuario> {

    let params = new HttpParams()
      .set('userLogin', login);

    return this.http.get<Usuario>(this.usuarioUrl, {params: params}).pipe(
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
    return throwError('Ops, houve um erro durante a autenticação, tente novamente mais tarde!.');
  }

}
