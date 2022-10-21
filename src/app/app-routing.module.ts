import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {
    path: 'login',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // resolve: {
    //   initialData: InitialDataResolver,
    // },
    // data: {applyPreload: true},
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'emp',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
