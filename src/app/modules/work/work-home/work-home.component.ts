import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.css']
})
export class WorkHomeComponent implements OnInit {
  btnIcon : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  openBox(){
    this.btnIcon = false;
 }
 closeBox(){
    this.btnIcon = true;
 }
}
