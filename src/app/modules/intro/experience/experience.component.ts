import { Component, OnInit } from '@angular/core';
import { IntroService } from 'src/app/common/services/intro.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  Hobbies : any;
  constructor(private _introService: IntroService) { }

  ngOnInit() {
    this.getHobbies();
  }

  getHobbies() {
    this._introService.getHobbies().subscribe((data:any) => {
      this.Hobbies = data;
    })
  }


}
