import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from 'src/app/reuseable-components/project-card/project-card.component';


@NgModule({
  declarations: [
    ProjectCardComponent,
    SkillComponent,
    ExperienceComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule
  ]
})
export class IntroModule { }
