import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, AbstractControl, FormControl, } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAddEmployee, IEmployeeSkills } from 'src/app/common/interfaces/employee';
import { NotificationService } from 'src/app/common/services/notification.service';
import { ShareService } from 'src/app/common/services/share.service';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-create-update-employee',
  templateUrl: './create-update-employee.component.html',
  styleUrls: ['./create-update-employee.component.css']
})
export class CreateUpdateEmployeeComponent implements OnInit {
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput!: ElementRef;
  fileUploadForm!: FormGroup;
  imageUrl: string = "/assets/img/default.png";
  fileToUpload!: File 
  EmployeeForm: any;
  designations: any;
  Departments: any;
  selectedIndex: number = 0;
  public SkillList!: FormArray;
  Skills: any
  employeeEmails: any
  employeeDialogData: any
  employeeDepartments: any
  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(private dialogRef: MatDialogRef<CreateUpdateEmployeeComponent>, private formBuilder: FormBuilder, private _workService: WorkService, private _notificationService: NotificationService, private _shareService: ShareService, @Inject(MAT_DIALOG_DATA) public EmployeeData: any) {
    dialogRef.disableClose = true;
    this.employeeDialogData = EmployeeData;
    _shareService.employeeEmailsObs.subscribe((data) => {
      this.employeeEmails = data;
    })
  }

  ngOnInit(): void {
  
    this.EmployeeForm = this.formBuilder.group({
      EmployeeName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(/^[a-z | A-Z | 0-9]+(@)[a-z]+(.com)$/), this.arrayExcludeValidation.bind(this)]],
      Designation: ['', [Validators.required]],
      SkillList: this.formBuilder.array([]),
    })
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
    if ((this.employeeDialogData.dialogAction == "Create")) {
      this.addSkill();
    }
    else {
      for (let i = 0; i < this.employeeDialogData.EmployeeData.gEmployeeSkills.length; i++) {
        this.addSkill();
      }
    }
    this.getDesignations();
    this.getSkills()
    this.SkillList.get('IsCertified')?.valueChanges.subscribe(
      checkedvalue => {
        const CertificationCompletionDate = this.SkillList.controls[0].get('CertificationCompletionDate');
        if (checkedvalue) {
          CertificationCompletionDate?.setValidators(Validators.required);
        }
        else {
          CertificationCompletionDate?.clearValidators();
        }
        CertificationCompletionDate?.updateValueAndValidity();
      }
    )
    this.getemployeeDialogData();
  }
  getemployeeDialogData() {
    if (this.employeeDialogData.dialogAction == "Update") {
      this.EmployeeForm.controls["EmployeeName"].patchValue(this.employeeDialogData.EmployeeData.employeeName);
      this.EmployeeForm.controls["Email"].patchValue(this.employeeDialogData.EmployeeData.email);
      this.EmployeeForm.get("Designation").patchValue(this.employeeDialogData.EmployeeData.designationId);
      for (let i = 0; i < this.employeeDialogData.EmployeeData.gEmployeeSkills.length; i++) {
        this.SkillList.controls[i].get("IsCertified")?.patchValue(this.employeeDialogData.EmployeeData.gEmployeeSkills[i].isCertified)
        this.SkillList.controls[i].get("CertificationCompletionDate")?.patchValue(this.employeeDialogData.EmployeeData.gEmployeeSkills[i].certificationCompletionDate)
        this.SkillList.controls[i].get("SkillId")?.patchValue(this.employeeDialogData.EmployeeData.gEmployeeSkills[i].skillId)
      }
    }
  }
  createSkill(): FormGroup {
    return this.formBuilder.group({
      SkillId: ['', [Validators.required]],
      IsCertified: [false, [Validators.required]],
      CertificationCompletionDate: ['']
    });
  }
  addSkill(): void {
    this.SkillList = this.EmployeeForm.get('SkillList') as FormArray;
    this.SkillList.push(this.createSkill());

  }
  deleteSkill(index: number) {
    this.dynamicform.value.splice(index, 1);
    this.SkillList.removeAt(index)
    this.disableSkillList();
  }
  get dynamicform() {
    return this.EmployeeForm.get('SkillList') as FormArray;
  }
  CertifiedToggleState(index: number) {
    let item: any = {};
    item = (this.dynamicform.value[index]);
    return !item.IsCertified;
  }
  tabChange(index: number) {
    this.selectedIndex = index;
    if (index == 1) {
      this.disableSkillList();
    }
  }

  getDesignations() {
    this._workService.getDesignations().subscribe((data: any) => { this.designations = data });
  }
  getSkills() {
    this._workService.getSkills().subscribe((data: any) => { this.Skills = data });
    //this._shareService.skillsObs.subscribe((data)=>{this.Skills=data});
  }
  getUsername() {
    if (this.EmployeeForm.get('Email').valid) {
      let email = this.EmployeeForm.get('Email').value;
      let name = (email.match(/[a-z | A-Z]+/g)[0])[0].toUpperCase() + (email.match(/[a-z | A-Z]+/g)[0]).substring(1).toLowerCase();
      //let lastname = (email.match(/[a-z | A-Z]+/g)[1])[0].toUpperCase() + (email.match(/[a-z | A-Z]+/g)[1]).substring(1).toLowerCase();
      this.EmployeeForm.controls["EmployeeName"].patchValue(name);
    }
    else {
      this.EmployeeForm.controls["EmployeeName"].reset();
    }
  }
  /*CreateEmployee() {
    if (this.EmployeeForm.get('EmployeeName').invalid || this.EmployeeForm.get('Email').invalid || this.EmployeeForm.get('Username').invalid || this.EmployeeForm.get('Designation').invalid || this.EmployeeForm.get('Department').invalid) {
      this.EmployeeForm.markAllAsTouched();
      this.selectedIndex = 0;
      this._notificationService.error("Please enter Employee Information correct", "Alert");
      return;
    }
    else if (this.EmployeeForm.get('SkillList').invalid) {
      this.selectedIndex = 1;
      this.EmployeeForm.markAllAsTouched();
      this._notificationService.error("Please enter Employee Skillset correct", "Alert");
      return;
    }
    if (this.EmployeeForm.valid) {
      let payload = new IAddEmployee();
      payload.employeeName = this.EmployeeForm.value.EmployeeName;
      payload.email = this.EmployeeForm.value.Email;
      payload.username = this.EmployeeForm.value.Username;
      payload.designationId = this.EmployeeForm.value.Designation;
      payload.departmentId = this.EmployeeForm.value.Department;

      let employeeSkills: Array<IEmployeeSkills> = Array<IEmployeeSkills>();
      for (let i = 0; i < this.EmployeeForm.value.SkillList.length; i++) {
        let employeeSkill: IEmployeeSkills = new IEmployeeSkills();
        employeeSkill.skillId = this.EmployeeForm.value.SkillList[i].SkillId;
        employeeSkill.isCertified = this.EmployeeForm.value.SkillList[i].IsCertified;
        employeeSkill.certificationCompletionDate = this.EmployeeForm.value.SkillList[i].CertificationCompletionDate == "" ? null : this.EmployeeForm.value.SkillList[i].CertificationCompletionDate;
        employeeSkills.push(employeeSkill);
      }
      payload.employeeSkills = employeeSkills;
      this._homeService.postEmployee(payload).subscribe((data) => {
          if (this.fileUploadForm.get('myfile').value != '') {
            let i = data.employeeId;
            let empid = i.toString();
            const formData = new FormData();
            formData.append('files', this.fileUploadForm.get('myfile').value);
            formData.append('imageName', 'default.png');
            formData.append('employeeId', empid)
            this._homeService.postImage(formData).subscribe(response => {
            });
          }
      });
    }
    this.dialogRef.close(true);
    this._notificationService.success("Employee Added Successfully", "");
  }*/
  CreateandUpdateEmployee(action: string) {
    
    if (this.EmployeeForm.get('EmployeeName').invalid || this.EmployeeForm.get('Email').invalid || this.EmployeeForm.get('Designation').invalid) {
      this.EmployeeForm.markAllAsTouched();
      this.selectedIndex = 0;
      this._notificationService.error("Please enter Employee Information correct", "Alert");
    }
    else if (this.EmployeeForm.get('SkillList').invalid) {
      this.selectedIndex = 1;
      this.EmployeeForm.markAllAsTouched();
      this._notificationService.error("Please enter Employee Skillset correct", "Alert");
    }
    if (this.EmployeeForm.valid) {
      let payload = new IAddEmployee();
      payload.employeeName = this.EmployeeForm.value.EmployeeName;
      payload.email = this.EmployeeForm.value.Email;
      payload.designationId = this.EmployeeForm.value.Designation;

      let employeeSkills: Array<IEmployeeSkills> = Array<IEmployeeSkills>();
      for (let i = 0; i < this.EmployeeForm.value.SkillList.length; i++) {
        let employeeSkill: IEmployeeSkills = new IEmployeeSkills();
        employeeSkill.skillId = this.EmployeeForm.value.SkillList[i].SkillId;
        employeeSkill.isCertified = this.EmployeeForm.value.SkillList[i].IsCertified;
        employeeSkill.certificationCompletionDate = this.EmployeeForm.value.SkillList[i].CertificationCompletionDate == "" ? null : this.EmployeeForm.value.SkillList[i].CertificationCompletionDate;
        employeeSkills.push(employeeSkill);

      }
      payload.employeeSkills = employeeSkills;
      if (action == 'Create') {
        this._workService.postEmployee(payload).subscribe((data) => {
          if (data == true) {
            this._notificationService.success("Employee Added Successfully", "");
            this.dialogRef.close(true);
            /*if (this.fileUploadForm.get('myfile').value != '') {
              let i = data.employeeId;
              let empid = i.toString();
              const formData = new FormData();
              formData.append('files', this.fileUploadForm.get('myfile').value);
              formData.append('imageName', 'default.png');
              formData.append('employeeId', empid)


              this._homeService.postImage(formData).subscribe(response => {
                this.dialogRef.close(true);
                
              });
            }*/
          }
        });
      }
      else {
        this._workService.putEmployee(this.employeeDialogData.EmployeeData.employeeId, payload).subscribe((data) => {
          if (data == true) {

            this._notificationService.success("Employee Updated Successfully", "");
            /*if (this.fileUploadForm.get('myfile').value != '') {
              let i = this.employeeDialogData.EmployeeData.employeeId;
              let empid = i.toString();
              const formData = new FormData();
              formData.append('files', this.fileUploadForm.get('myfile').value);
              formData.append('imageName', 'default.png');
              formData.append('employeeId', empid)
            }*/
            this.dialogRef.close(true);
          }
        });
      }
    }

  }

  conditionValidation(index: any) {
    let checkedvalue = this.SkillList.controls[index].get('IsCertified')?.value
    const CertificationCompletionDate = this.SkillList.controls[index].get('CertificationCompletionDate');
    if (checkedvalue) {
      CertificationCompletionDate?.setValidators(Validators.required);
    }
    else {
      CertificationCompletionDate?.clearValidators();
      CertificationCompletionDate?.reset();
    }
    CertificationCompletionDate?.updateValueAndValidity();
    CertificationCompletionDate?.markAsTouched();
  }
  arrayExcludeValidation(control: FormControl): { [key: string]: boolean } | null {
    if (this.employeeDialogData.dialogAction == "Create" && this.employeeEmails.includes(control.value)) {
      return { emailRestricted: true }
    }
    return null;
  }
  disableSkillList() {
    this.Skills.forEach((element: any) => {
      element.skillstatus = false;
      if (this.SkillList.controls.find((t: any) => t.value.SkillId == element.skillId))
        element.skillstatus = true;
    });
  }
  handleFileInput(element:any) {
    this.fileToUpload = element.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  }
  onFileSelect(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(file)
      this.fileUploadForm.get('myfile')?.setValue(file);
      this._notificationService.warning("Your Profile Pic size is " + file.size + " bytes", "Image uploaded Successfully")
    }
  }
  
}