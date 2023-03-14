import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-cascade-dropdown',
  templateUrl: './cascade-dropdown.component.html',
  styleUrls: ['./cascade-dropdown.component.css']
})
export class CascadeDropdownComponent implements OnInit {
  Skills : any;
  constructor(private _workService : WorkService, private activateRoute : ActivatedRoute) { }

  ngOnInit(){
    this.getSkills()
  }
  getSkills() {
    //this._workService.getSkills().subscribe((data: any) => { this.Skills = data });
    this.Skills = this.activateRoute.snapshot.data['data'];
  }
}
