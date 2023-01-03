import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkHomeComponent } from './work-home/work-home.component';

const routes: Routes = [
  {path:'',component:WorkHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
