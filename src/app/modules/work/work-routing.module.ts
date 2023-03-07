import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { CascadeDropdownComponent } from './cascade-dropdown/cascade-dropdown.component';
import { CustomDecoratorComponent } from './custom-decorator/custom-decorator.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { WorkHomeComponent } from './work-home/work-home.component';

const routes: Routes = [
  {
    path: '', component: WorkHomeComponent, children: [
      { path: '', component: IntroductionComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'cascading-dropdown', component: CascadeDropdownComponent },
      { path: 'animation', component: AnimationComponent },
      { path: 'custom-directive', component: CustomDirectiveComponent },
      { path: 'custom-decorator', component: CustomDecoratorComponent },
      { path: 'token-interceptor', component: TokenInterceptorComponent },
      { path: 'update-list', component: UpdateListComponent },
      { path: 'rxjs', component: RxjsComponent },
      { path: 'file-preview', component: FilePreviewComponent },
      { path: 'products', component: ProductGalleryComponent}
    ]
  },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
