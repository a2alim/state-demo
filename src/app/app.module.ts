import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';
import { empReducer } from './state/employee/emp.reducer';
import { loginReducer } from './state/login/login.reducer';
import { empListReducer } from './state/employee/empList.reducer';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    StoreModule.forRoot(
      {emp: empReducer, isLogin: loginReducer, empList: empListReducer}
    )
  ],
  providers:[
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
