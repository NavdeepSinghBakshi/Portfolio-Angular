import { Component, OnInit } from '@angular/core';

export class Department {
  name !: string;
  depId !: number;
  teachers !: string[];
}

@Component({
  selector: 'app-custom-decorator',
  templateUrl: './custom-decorator.component.html',
  styleUrls: ['./custom-decorator.component.css']
})
export class CustomDecoratorComponent implements OnInit {
  public departments:any[] = [{name:'CSE',depId:23},{name:'EEE',depId:24},{name:'IT',depId:25},{name:'ME',depId:26}]
  public selectedDep! : Department;
  public thr : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onDepartmentChange(depIndex: string,teacher:string){
    this.selectedDep = this.departments[+depIndex];
    this.thr = teacher;
  }
}