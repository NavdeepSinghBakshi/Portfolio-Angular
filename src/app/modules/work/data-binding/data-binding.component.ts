import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = '';
  textSize = 15;
  textColor = 'primary';
  boxColor = 'primary';
  constructor() { }

  ngOnInit() {
  }
  setText(event: any) {
    const val = event.target.value;
    this.text = val;
  }
  setSize(operation: string) {
    if (operation == 'inc') {
      this.textSize += 1;
    }
    else {
      this.textSize -= 1;
    }
  }
  setColor(event:any){
     const val = event.target.value;
     this.textColor = val;
  }
  changeBoxColor()
  {
    this.boxColor == 'primary' ? this.boxColor = 'danger' : this.boxColor = 'primary';
  }
}