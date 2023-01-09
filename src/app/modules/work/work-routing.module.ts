import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { CascadeDropdownComponent } from './cascade-dropdown/cascade-dropdown.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { EmployeeComponent } from './employee/employee.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { WorkHomeComponent } from './work-home/work-home.component';

const routes: Routes = [
  {
    path: '', component: WorkHomeComponent, children: [
      { path: '', component: IntroductionComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'cascading-dropdown',component:CascadeDropdownComponent},
      { path: 'animation',component:AnimationComponent},
      { path: 'custom-directive',component:CustomDirectiveComponent},
      { path: 'token-interceptor',component:TokenInterceptorComponent},
      { path: 'update-list',component:UpdateListComponent},
    ]
  },
  {path:'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
