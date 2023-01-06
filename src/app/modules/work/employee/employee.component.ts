import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { NotificationService } from 'src/app/common/services/notification.service';
import { ShareService } from 'src/app/common/services/share.service';
import { WorkService } from 'src/app/common/services/work.service';
import { CreateUpdateEmployeeComponent } from 'src/app/DialogBox/create-update-employee/create-update-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  EmployeeDetails: any
  Designations: any
  Departments: any
  Skills: any
  DepartmentName = 'All'
  EmployeeData: any
  employeeEmails: any
  imageDetails: any
  colorChange: boolean = false
  imageUrl: string = "/assets/img/default.png";
  @ViewChild('EmployeeTable') EmployeeTable: Table | undefined;

  constructor(public dialog: MatDialog, private activateRoute: ActivatedRoute, private _workService: WorkService, private _shareService: ShareService, private _notificationService: NotificationService, private route: Router) { }

  ngOnInit(): void {
    //this.assignSkills();
    this.getDesignations();
    this.getSkills();
    this.getEmployee();
  }
  getSkills() {
    this._workService.getSkills().subscribe((data: any) => { this.Skills = data });
    this._shareService.skillsChange(this.Skills);
  }
  getEmployee(): any {
    this._workService.getEmployee().subscribe((data: any) => {
    this.EmployeeData = data;
    this.EmployeeDetails = this.EmployeeData;
    let employeeEmailsArray: any[] = []
    this.EmployeeData.forEach((x: any) => {
      const { email, ...spread } = x;
      employeeEmailsArray.push(email)
    })
    this.employeeEmails = employeeEmailsArray
    this._shareService.employeeEmailsChange(employeeEmailsArray);
    });
  }

  getDesignations() {
    this._workService.getDesignations().subscribe((data: any) => { this.Designations = data });
  }

  assignSkills() {
    this.EmployeeDetails.forEach((element: any) => {

      var result = this.stringToJson(element.Skills);
      Object.assign(element, { SkillsList: result })

    });
  }
  applyFilterGlobal($event: Event) {
    this.EmployeeTable!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  stringToJson(Skills: any): any {
    let SkillsList: any[] = []
    let Skillssplit = Skills.split(";")
    Skillssplit.map((x: any) => {
      let SkillName = x.match(/[A-Z | a-z | ' ']+/g) != null ? x.match(/[A-Z | a-z | ' ']+/g)[0] : "";
      let SkillRating = x.match(/[0-9 | ',']+/g) != null ? x.match(/[0-9]+/g)[0] : "";
      SkillsList.push({ SkillName: SkillName, SkillRating: SkillRating })
    })
    return SkillsList;
  }
  designationId_by_designationName(designationName: any) {
    return this.Designations.find((x: any) => x.designationName == designationName).designationId
  }
  skillId_by_skillName(skillName: any) {
    return this.Skills.find((x: any) => x.skillName == skillName).skillId
  }
  CreateAndUpdateEmployee(action: string, EmployeeData?: any) {
    let data;
    if (action == 'Create') {
      data = { dialogAction: action }
    }
    else {
      Object.assign(EmployeeData, { designationId: this.designationId_by_designationName(EmployeeData.designationName) })
      data = {
        "dialogAction": action,
        "EmployeeData": EmployeeData
      }
    }
    const dialogRef = this.dialog.open(CreateUpdateEmployeeComponent, {
      width: '800px',
      autoFocus: false,
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployee();
    });

  }
  deleteEmployee(employeeid: any) {

    this._workService.deleteEmployee(employeeid).subscribe((result: any) => {

          this._notificationService.success("Employee Deleted Successfully", "");
          this.getEmployee();
    })
    
  }
  find_skillName_by_skillId(skillId: any) {

    return this.Skills.find((x: any) => x.skillId == skillId).skillName
  }
  yes_no_for_certifiedSkill(isCertified: boolean) {
    return isCertified ? 'Yes' : 'No'
  }


}
