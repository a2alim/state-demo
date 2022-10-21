import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  @ViewChild('tabset') tabset: TabsetComponent | undefined;
  
  tabs: any[] = [
    { title: 'Basic Information', content: 'basicInformation', initiated: true, active: true },
    { title: 'Skill Information', content: 'skillInformation', initiated: false },
    { title: 'View Information', content: 'viewInformation', initiated: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tab:any){

  }

}
