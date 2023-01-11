import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-favourate-list',
  templateUrl: './update-favourate-list.component.html',
  styleUrls: ['./update-favourate-list.component.css']
})
export class UpdateFavourateListComponent implements OnInit {
  DialogData: any;
  selectedFruits:any;
  color : string = '';
  constructor(private dialogRef: MatDialogRef<UpdateFavourateListComponent>, @Inject(MAT_DIALOG_DATA) public FruitData: any) {
    this.DialogData = FruitData;
    this.selectedFruits = FruitData;
  }

  ngOnInit(): void {
  }

  getSelectedFruits(value: any) {debugger
    this.selectedFruits = value;
  }
  close()
  {
    this.dialogRef.close({data:this.selectedFruits})
  }
}
