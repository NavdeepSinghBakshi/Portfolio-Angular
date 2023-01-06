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


@NgModule({
  declarations: [
    WorkHomeComponent,
    ReactiveFormComponent,
    IntroductionComponent,
    EmployeeComponent,
    CreateUpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    AngularMaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WorkModule { }
