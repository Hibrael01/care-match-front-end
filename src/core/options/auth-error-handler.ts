import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class AuthErrorHandler implements ErrorHandler {

    constructor(private injector: Injector,  private _snackBar: MatSnackBar) { }

    handleError(error: any): void {
        const router = this.injector.get(Router);

        if(error.rejection === undefined) {

        }else{ 
             
            if(error.rejection.status === 401 || error.rejection.status === 403){
                router.navigate(['/login']);
                this._snackBar.open('Acesso não Autorizado!', '', {duration: 3000});
            }
        }
    }

}