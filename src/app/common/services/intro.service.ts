import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IntroData } from 'src/assets/data/intro';

@Injectable({
  providedIn: 'root'
})
export class IntroService{
  data = new IntroData();
  constructor() {
  }
  getTechnologies(){
    return of(this.data.technologies);
  }
  getProjects(){
    return of(this.data.projects);
  }
  getTools(){
    return of(this.data.tools);
  }
  getHobbies(){
    return of(this.data.hobbies);
  }
}
