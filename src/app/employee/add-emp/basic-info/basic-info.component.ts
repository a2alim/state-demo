import { Component, OnInit, OnDestroy} from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Store } from '@ngrx/store';
import { initEmp } from 'src/app/state/employee/emp.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment  from "moment";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit, OnDestroy {
  
  employee: Employee = new Employee();
  form: FormGroup;
  maxDob: Date = new Date();

  constructor(
    private store: Store<{emp: Employee}>,
    private _formBuilder: FormBuilder,
  ) { 
    this.form = this._formBuilder.group({
      id: [''],
      firstName: ['',Validators.required],
      lastName: [''],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]],
      gender: ['', Validators.required],
      isValid: [false],
    });
  }

  ngOnInit(): void {
    this.store.select('emp').subscribe(data =>{
      this.employee = {...data}
      if(Object.keys(this.employee).length>0){
        this.patchFormVale();
      }
    });
    this.maxDob = new Date(moment().subtract(1, 'days').toString());
  }

  patchFormVale(){
    this.form.patchValue({
      id: this.employee.id,
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      dateOfBirth: this.employee.dateOfBirth,
      phone: this.employee.phone,
      gender: this.employee.gender,
    });
  };

  ngOnDestroy(){
    this.employee.id = this.form.value.id;
    this.employee.firstName = this.form.value.firstName;
    this.employee.lastName = this.form.value.lastName;
    this.employee.dateOfBirth = this.form.value.dateOfBirth;
    this.employee.phone = this.form.value.phone;
    this.employee.gender = this.form.value.gender;
    this.employee.isValid = this.form.valid;
    this.store.dispatch(initEmp(this.employee))
  }

}
