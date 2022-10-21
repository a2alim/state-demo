import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Store } from "@ngrx/store";
import { initEmp } from 'src/app/state/employee/emp.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.css']
})
export class SkillInfoComponent implements OnInit, OnDestroy {

  employee: Employee = new Employee();
  form: FormGroup;
  
  constructor(
    private store: Store<{emp: Employee}>,
    private _formBuilder: FormBuilder,
  ) { 
    this.form = this._formBuilder.group({
      id: [this.employee.id],
      skillName: ['',Validators.required],
      experience: ['',Validators.required],
      skillLevel: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.select('emp').subscribe(data =>{
      this.employee = {...data}
      if(Object.keys(this.employee).length>0){
        this.patchFormVale();
      }
    });
  }

  patchFormVale(){
    this.form.patchValue({
      id: this.employee.id,
      skillName: this.employee.skillName,
      experience: this.employee.experience,
      skillLevel: this.employee.skillLevel,
    });
  };
  
  ngOnDestroy(){
    if(this.form.valid){
      this.employee.id = this.form.value.id;
      this.employee.skillName = this.form.value.skillName;
      this.employee.skillLevel = this.form.value.skillLevel;
      this.employee.experience = this.form.value.experience;
      this.employee.isValid = this.form.valid;
      this.store.dispatch(initEmp(this.employee));
    }
  }
}
