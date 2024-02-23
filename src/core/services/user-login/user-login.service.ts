import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from 'src/core/models/usuario.model';
import { jwtDecode } from 'jwt-decode';

export const TOKEN_NAME: string = 'token';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private usuarioUrl: string = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  doLogin(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.usuarioUrl, usuario).pipe(
      catchError(this.handleError)
    );
  }

  doLogout() : boolean {
    this.removeToken();
    return true;
  }

  getToken(): string {
    let token !: any;
    let stToken !: string;
    token = localStorage.getItem(TOKEN_NAME);

    if(token != null){
      stToken = token;
    }else{
      stToken = '';
    }

    return stToken;
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_NAME);
  }
  
  getTokenExpirationDate(token: string): Date | null {
    const decoded = jwtDecode(token);
    
    if(decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
 
  isTokenExpired(token?: string|null): boolean {
    if(!token){
      token = this.getToken();
    } 

    if(!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) return false;

    return !(date.valueOf() > new Date().valueOf());

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
    return throwError('Não foi possível realizar o Login, verifique os dados!.');
  }

}
