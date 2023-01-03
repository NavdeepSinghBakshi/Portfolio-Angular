import { Component, OnInit } from '@angular/core';
import { IntroService } from 'src/app/common/services/intro.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  Projects : any;
  constructor(private _introService: IntroService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this._introService.getProjects().subscribe((data:any) => {
      this.Projects = data;
    })
  }

}
