import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  products: any;
  weightFilter: any[] = [];
  filter: any[] = [];
  tempArray: any = [];
  newArray: any = [];
  constructor(private _workService: WorkService) { }

  ngOnInit() {
    this.weightFilter = [
      { id: 1, type: "checkbox", weight: 0.1, value: 100 },
      { id: 2, type: "checkbox", weight: 0.5, value: 500 },
      { id: 3, type: "checkbox", weight: 1, value: 1 },
      { id: 4, type: "checkbox", weight: 5, value: 5 }
    ]
    this._workService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.filter = data;
    })
  }
  onChange(event: any) {

    if (event.target.checked) {
      debugger
      this.tempArray = this.filter.filter((e: any) => e.w == event.target.value)
      this.products = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var object = firstArray[i];
          this.products.push(object);
        }
      }
    }
    else {
      debugger
      this.tempArray = this.products.filter((e: any) => e.w != event.target.value);
      this.newArray = [];
      this.products = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var object = firstArray[i];
          this.products.push(object);
        }
      }
      if (this.products.length == 0)
        this.products = this.filter;
    }
  }
}


