import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/guards/auth.guard';
import { BasicInfoComponent } from './add-emp/basic-info/basic-info.component';
import { SkillInfoComponent } from './add-emp/skill-info/skill-info.component';
import { ViewInfoComponent } from './add-emp/view-info/view-info.component';


@NgModule({
  declarations: [
    AddEmpComponent,
    EmpListComponent,
    BasicInfoComponent,
    SkillInfoComponent,
    ViewInfoComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  providers: [AuthGuard]
})
export class EmployeeModule { }
