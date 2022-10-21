import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private store: Store<{isLogin: Boolean}>,
        private _router: Router
    ) {}

    canActivate(): boolean {
        return this.checkIsLogin();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkIsLogin();
    }

    checkIsLogin(): boolean{
        let isLogin: Boolean = false;
        this.store.select('isLogin').subscribe(data =>{
            isLogin = data;
        });
        if(isLogin){
            return true;
        }else{
            this._router.navigateByUrl('login');                
            return false;
        }
    }

}
