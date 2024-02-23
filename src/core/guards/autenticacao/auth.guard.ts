import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/core/services/user-login/user-login.service';

@Injectable({providedIn: 'root',})
export class AuthGuard {

  constructor(private _userlogin: UserLoginService, private router: Router, private _snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
     
    const token = this._userlogin.getToken();
    console.log(token);
    if(token === undefined || token === null || token.length == 0){
      this._snackBar.open("Você não está autenticado!", '', {duration: 3000});
      this.router.navigate(['login']);
    }else{

      if(this._userlogin.isTokenExpired()){
        this._snackBar.open("Seu tempo de acesso expirou, realize um novo login!", '', {duration: 3000});
        this.router.navigate(['login']);
        this._userlogin.removeToken();
      }else{
        return true;
      }

    }

    return false;

  }

}