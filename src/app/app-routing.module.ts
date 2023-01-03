import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './common/components/contact/contact.component';
import { HomeComponent } from './common/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-intro',loadChildren:()=>import('./modules/intro/intro.module').then(m=>m.IntroModule)},
  { path: 'work',loadChildren:()=>import('./modules/work/work.module').then(m=>m.WorkModule)},
  { path: 'blog',loadChildren:()=>import('./modules/blog/blog.module').then(m=>m.BlogModule)},
  { path: 'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
