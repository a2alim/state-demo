import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Store } from "@ngrx/store";
import { addEmp, resetEmp, updateEmp } from 'src/app/state/employee/emp.action';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private _store: Store<{emp: Employee, empList: Employee[]}>,
    private _route : Router,
    private _toast: ToastrService
  ) { }

  ngOnInit(): void {
    this._store.select('emp').subscribe(data =>{
      this.employee = {...data}
      if (Object.keys(this.employee).length > 0) {
        this.employee.isValid = true; 
      }
    });
  }

  resetEmployee(){
    this.employee = new Employee();
    this.employee.isValid = false; 
    this._store.dispatch(resetEmp());
    this._toast.success('Form Reset Successfully.')
  }

  addEmployee(){
    this._store.dispatch(addEmp(this.employee));
    this._route.navigateByUrl('emp');
    this._toast.success('Employee Save Successfully.')
  }

  updateEmployee(){
    this._store.dispatch(updateEmp(this.employee));
    this._route.navigateByUrl('emp');
    this._toast.success('Employee Update Successfully.')
  }

}
