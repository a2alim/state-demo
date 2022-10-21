import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  isLogin: Boolean = false;
  loginForm: FormGroup;

  constructor(
    private _store: Store<{ isLogin: Boolean }>,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  handleLogin(){
    this._authService.login(this.loginForm?.value.email, this.loginForm?.value.password);
    let login = this.checkLogin();
    if(login){
      this.toastr.success('Login Successfully.');
      this._router.navigateByUrl('emp');   
    }else{
      this.toastr.success('Login Failed !!');
    }
  }

  handleLogout(){
    this._authService.logOut();
    let login = this.checkLogin();
    if(login){
      this.toastr.success('Logout Failed !!');
    }else{
      this.toastr.success('Logout Successfully.');
      this._router.navigateByUrl('login');   
    }
  }

  private checkLogin(): Boolean{
    this._store.select('isLogin').subscribe((data) => {
      this.isLogin = data;
    });
    return this.isLogin;
  }


}
