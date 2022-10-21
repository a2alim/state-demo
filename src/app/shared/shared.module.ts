import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  exports:[
    TabsModule,
    BsDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
