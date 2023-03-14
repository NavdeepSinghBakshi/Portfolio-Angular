import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-data-on-scroll',
  templateUrl: './data-on-scroll.component.html',
  styleUrls: ['./data-on-scroll.component.css']
})
export class DataOnScrollComponent implements OnInit {
  ProjectLists: any = [];
  no: number = 1;
  pl: any
  constructor(private _workService: WorkService) { }

  public onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.addMoreItems();
    }
  }
  ngOnInit(){
    this.getProjectLists(this.no);
  }
  addMoreItems() {
    this.no++;
    if (this.no < 4)
      this.getProjectLists(this.no);
  }
  getProjectLists(size: number) {debugger
    debugger
    this._workService.getProjectLists(size).subscribe(data => {
      if (size == 1){
        this.ProjectLists = data;
      }
      else {
        this.pl = data
        this.ProjectLists = [...this.ProjectLists, ...this.pl];
      }
    })
  }
}
