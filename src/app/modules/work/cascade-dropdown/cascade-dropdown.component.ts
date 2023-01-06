import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-cascade-dropdown',
  templateUrl: './cascade-dropdown.component.html',
  styleUrls: ['./cascade-dropdown.component.css']
})
export class CascadeDropdownComponent implements OnInit {
  Skills : any;
  constructor(private _workService : WorkService) { }

  ngOnInit(){
    this.getSkills()
  }
  getSkills() {
    this._workService.getSkills().subscribe((data: any) => { this.Skills = data });
  }
}
