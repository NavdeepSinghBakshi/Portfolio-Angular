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
import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AnimationComponent } from './animation/animation.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { UpdateFavourateComponent } from 'src/app/reuseable-components/update-favourate/update-favourate.component';
import { UpdateFavourateListComponent } from 'src/app/DialogBox/update-favourate-list/update-favourate-list.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { CustomDecoratorComponent } from './custom-decorator/custom-decorator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DepartmentComponent } from './department/department.component';
import { FileInputDirective } from 'src/app/core/directives/file-input.directive';


@NgModule({
  declarations: [
    WorkHomeComponent,
    ReactiveFormComponent,
    IntroductionComponent,
    EmployeeComponent,
    CreateUpdateEmployeeComponent,
    CascadeDropdownComponent,
    TokenInterceptorComponent,
    CustomDirectiveComponent,
    AnimationComponent,
    UpdateListComponent,
    UpdateFavourateListComponent,
    UpdateFavourateComponent,
    RxjsComponent,
    FilePreviewComponent,
    CustomDecoratorComponent,
    DataBindingComponent,
    DepartmentComponent,
    FileInputDirective
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
