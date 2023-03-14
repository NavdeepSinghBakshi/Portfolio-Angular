import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { WorkService } from 'src/app/common/services/work.service';
import { ProductEvent } from 'src/app/reuseable-components/product-card/product-card.component';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  products: any;
  Products : any;
  weightFilter: any[] = [];
  filter: any[] = [];
  tempArray: any = [];
  newArray: any = [];
  inc: number = 0;
  count:any;
  constructor(private _workService: WorkService) { }
  ngOnInit() {
    this.weightFilter = [
      { id: 1, type: "checkbox", weight: 0.1, value: 100 },
      { id: 2, type: "checkbox", weight: 0.5, value: 500 },
      { id: 3, type: "checkbox", weight: 1, value: 1 },
      { id: 4, type: "checkbox", weight: 5, value: 5 }
    ]
    this._workService.getProducts().pipe(map((x:any) => x.filter((x:any)=>{return (((x['mp'] - x['dp']) * 100) / x['mp']) <= 36}))).subscribe((data: any) => {
      this.products = data;
      this.filter = data;
    })
    this._workService.getProducts().pipe(map((x:any) => x.filter((x:any)=>{return (((x['mp'] - x['dp']) * 100) / x['mp']) > 36}))).subscribe((data: any) => {
      this.Products = data;
    })
    this.count = setInterval(()=>{
      this.inc++;
      if(this.inc == this.products.length)
      {
        clearInterval(this.count);
      }
    },1000)
  }
  onChange(event: any) {

    if (event.target.checked) {
      debugger
      this.tempArray = this.filter.filter((e: any) => e.w == event.target.value)
      this.products = [];
      this.newArray.push(this.tempArray);
      this.products = this.newArray.flat();
    }
    else {
      debugger
      this.tempArray = this.products.filter((e: any) => e.w != event.target.value);
      this.newArray = [];
      this.products = [];
      this.newArray.push(this.tempArray);
      this.products = this.newArray.flat();
      if (this.products.length == 0)
        this.products = this.filter;
    }
  }
  onRemoveEvent(evt: ProductEvent) {
    this.products = this.products.filter((p: any) => p.no !== evt.product.no)
  }
}


