import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: Boolean = false;
  activeNav: string = 'login';

  constructor(
    private _authService: AuthService,
    private _store: Store<{ isLogin: Boolean }>,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._store.select('isLogin').subscribe((data) => {
      this.isLogin = data;
      if(this.isLogin){
        this.activeNav = 'empList';
      }
      console.log('_router : ', this._router.url);
    });
  }

  handleLogout(){
    if(this.isLogin){
      this._authService.logOut();
      if(!this.isLogin){
        this.navigateTo('login', 'login') 
        this.toastr.success('Logout Successfully.');
      }else{
        this.toastr.warning('Logout Failed !!');
      }
    }else{
      this.toastr.warning('Please Login First !!');
    }
  }

  navigateTo(url: string, activeNav: string){
    this.activeNav = activeNav;
    this._router.navigateByUrl(url);
    if(!this.isLogin && activeNav != "login"){
      this.toastr.warning('Please Login First !!');
    }
  }

}
