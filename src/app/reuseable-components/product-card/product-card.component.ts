import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';
export enum Product_Event_Type {
  SELECT = "SELECT",
  REMOVE = "REMOVE"
}
export interface ProductEvent{
  type: Product_Event_Type,
  product : Product
}
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Product;
  selected: boolean = false;
  @Output() onSelect = new EventEmitter<ProductEvent>();
  @Output() onRemove = new EventEmitter<ProductEvent>();
  constructor() { }

  ngOnInit(): void {
  }
  discount() {
    return ((this.product.mp - this.product.dp) * 100) / this.product.mp;
  }
  emitSelectedEvent(){
    this.selected = true;
    this.onSelect.emit({product : this.product,type:Product_Event_Type.SELECT});
  }
  emitRemoveEvent(){
    this.selected = false;
    this.onRemove.emit({product : this.product,type:Product_Event_Type.REMOVE});
  }
}
