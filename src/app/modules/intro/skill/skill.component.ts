import { Component, OnInit } from '@angular/core';
import { IntroService } from 'src/app/common/services/intro.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  Technologies: any;
  Tools : any;
  constructor(private _introService: IntroService) { }

  ngOnInit() {
    this.getTechnologies();
    this.getTools();
  }

  getTechnologies() {
    this._introService.getTechnologies().subscribe((data:any) => {
      this.Technologies = data;
    })
  }
  getTools() {
    this._introService.getTools().subscribe((data:any) => {
      this.Tools = data;
    })
  }
}
