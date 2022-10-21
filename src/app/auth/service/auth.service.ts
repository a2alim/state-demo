import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { login, logout } from 'src/app/state/login/login.action';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    _authenticated: Observable<boolean> | undefined;

    constructor(
        private _httpClient: HttpClient,
        private cookieService: CookieService,
        private _store: Store<{ isLogin: Boolean }>,
    ) {}

    set accessToken(token: string) {
        this.cookieService.set('access_token', token);
    }

    get accessToken(): any {
        return this.cookieService.get('access_token');
    }

    checkAccessToken(): boolean {
        return  !!this.cookieService.get('access_token');
    }

    public login(username: any, password: any): Observable<any> {
        if((username.includes('admin') || username.includes('user')) && username.includes('@') && password =='123456'){
            this._store.dispatch(login());
        }
        this._authenticated = of(false);
        return of(true);
    }

    logOut(): Observable<any> {
        this._store.dispatch(logout());
        this._authenticated = of(false);
        return of(true);
    }

}
