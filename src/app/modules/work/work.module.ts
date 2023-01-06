import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkHomeComponent } from './work-home/work-home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material/angular-material.module';
import { EmployeeComponent } from './employee/employee.component';
import { PrimengModule } from 'src/app/core/modules/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUpdateEmployeeComponent } from 'src/app/DialogBox/create-update-employee/create-update-employee.component';
import { CascadeDropdownComponent } from './cascade-dropdown/cascade-dropdown.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';


@NgModule({
  declarations: [
    WorkHomeComponent,
    ReactiveFormComponent,
    IntroductionComponent,
    EmployeeComponent,
    CreateUpdateEmployeeComponent,
    CascadeDropdownComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    AngularMaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class WorkModule { }
