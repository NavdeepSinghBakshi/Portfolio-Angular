import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { EmployeeData } from 'src/assets/data/employee';
import { IAddEmployee, IEmployeeSkills } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  data = new EmployeeData();
  constructor() { }
  getSkills(){
    return of(this.data.Skills);
  }
  getDesignations(){
    return of(this.data.Designations);
  }
  getEmployee(){
    return of(this.data.Employees);
  }
  deleteEmployee(employeeid : any){
    this.data.Employees=this.data.Employees.filter((x:any)=>{ return x['employeeId'] !== employeeid});
    return of(true);
  }
  putEmployee(employeeId:any, payload:any){
    let designation = this.data.Designations.find((x:any)=>x['designationId'] == payload.designationId)?.designationName as string;
    let array: any[] = [];
    payload.employeeSkills.forEach((x:any)=>{
      array.push({ skillId:x['skillId'] ,isCertified:x['isCertified'],certificationCompletionDate:x['certificationCompletionDate'] })
    })
    this.data.Employees.forEach((x:any)=>{
      if(x['employeeId'] == employeeId)
      {
        x.employeeName = payload.employeeName;
        x.email = payload.email;
        x.designationName = designation;
        x.gEmployeeSkills = array;
      }
    })
    return of(true);
  }
  postEmployee(payload:IAddEmployee){
    let designation = this.data.Designations.find((x:any)=>x['designationId'] == payload.designationId)?.designationName as string;
    let length = this.data.Employees.length;
    let id = this.data.Employees[length-1].employeeId;
    let array: any[] = [];
    payload.employeeSkills.forEach((x:any)=>{
      array.push({ skillId:x['skillId'] ,isCertified:x['isCertified'],certificationCompletionDate:x['certificationCompletionDate'] })
    })
    let data = { employeeId:id+1, employeeName: payload.employeeName, email: payload.email, designationName: designation, gEmployeeSkills: array }
    this.data.Employees.push(data);
    return of(true);
  }
}
