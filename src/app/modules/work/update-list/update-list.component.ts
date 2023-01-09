import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFavourateListComponent } from 'src/app/DialogBox/update-favourate-list/update-favourate-list.component';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  fruits : any[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fruits=[
      {id:1,name:'Apple'},
      {id:2,name:'Banana'},
      {id:3,name:'Orange'}
    ]
  }
  open_lock() {
    let data = this.fruits;
    const dialogRef = this.dialog.open(UpdateFavourateListComponent, {
      width: '800px',
      autoFocus: false,
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.data.length > 0) {
        this.fruits=result.data;
      }
    });

  }
}
