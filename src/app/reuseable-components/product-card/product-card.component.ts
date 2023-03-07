import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Product;
  selected: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  discount() {
    return ((this.product.mp - this.product.dp) * 100) / this.product.mp;
  }

}
