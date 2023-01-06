import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CascadeDropdownComponent } from './cascade-dropdown/cascade-dropdown.component';
import { EmployeeComponent } from './employee/employee.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WorkHomeComponent } from './work-home/work-home.component';

const routes: Routes = [
  {
    path: '', component: WorkHomeComponent, children: [
      { path: '', component: IntroductionComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'cascading-dropdown',component:CascadeDropdownComponent}
    ]
  },
  {path:'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
