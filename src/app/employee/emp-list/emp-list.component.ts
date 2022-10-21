import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/employee/service/employee.service';
import { initEmp, removeEmp } from 'src/app/state/employee/emp.action';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private _store: Store<{ empList: Employee[] }>,
    private _router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this._store.select('empList').subscribe((data) => {
      this.employees = data;
    });
  }

  eidt(employee:Employee){
    this._store.dispatch(initEmp(employee));
    this._router.navigateByUrl('emp/add');
  }

  delete(employee:Employee){
    this.toastr.success('Delete Successfull.');
    this._store.dispatch(removeEmp(employee));
  }


}
