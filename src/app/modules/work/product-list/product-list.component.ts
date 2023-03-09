import { AfterContentChecked, AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { ProductCardComponent, ProductEvent, Product_Event_Type } from 'src/app/reuseable-components/product-card/product-card.component';
class HighlightedComponent {
  constructor(public readonly instance: ProductCardComponent | undefined = undefined, public readonly index = 0) { }
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterContentInit,AfterContentChecked {
  @ContentChildren(ProductCardComponent) productComponentQueryList !: QueryList<ProductCardComponent>;
  public highlightedComponent: HighlightedComponent = new HighlightedComponent();
  private _componentsEvents$ !: Subscription;
  constructor() { }
  ngOnInit() {
  }
  ngAfterContentChecked(){
    //this.handleComponentEvent(this.photoComponentQueryList);
  }
  ngAfterContentInit() {
    this.productComponentQueryList.changes.subscribe((queryList:QueryList<ProductCardComponent>)=>{
      this.handleComponentEvent(queryList);
    });
    this.handleComponentEvent(this.productComponentQueryList);
  }
  private handleComponentEvent(cmpList: QueryList<ProductCardComponent>) {
    this.resetComponentsEventSubs();
    cmpList.forEach((productComponent, index) => {
      const events$ = merge(productComponent.onSelect,productComponent.onRemove).subscribe((evt: ProductEvent) => {
        this.onPhotoComponentEvent(productComponent, index, evt.type);
      });
      this._componentsEvents$.add(events$);
    });
  }
  private onPhotoComponentEvent(selectedProductComponent: ProductCardComponent, curIdx: number, evtType: Product_Event_Type) {
    const { index: prevIdx, instance: prevSelectedComponent } = this.highlightedComponent;
    switch (evtType) {
      case Product_Event_Type.SELECT:
        if (prevSelectedComponent && prevIdx !== curIdx) {
          prevSelectedComponent.selected = false;
        }
        this.highlightedComponent = new HighlightedComponent(selectedProductComponent, curIdx);
        return;

        case Product_Event_Type.REMOVE:
        if (prevSelectedComponent && prevIdx === curIdx) {
          this.highlightedComponent = new HighlightedComponent();
        }
    }
  }
  private resetComponentsEventSubs(){
    if(this._componentsEvents$)
    {
      this._componentsEvents$.unsubscribe();
    }
    this._componentsEvents$ = new Subscription();
  }
  public changePhoto(incUnit:any):void{
    let { index, instance: component } = this.highlightedComponent;
    const cmpListLength = this.productComponentQueryList.length;
    if(component){
      component.selected = false;
      index = (index + incUnit) % cmpListLength;
      index = index < 0 ? cmpListLength - 1 : index;
    }
    const photoComponent = this.productComponentQueryList.find((item:ProductCardComponent,inx:number)=>{return inx == index;})
    if(!photoComponent || photoComponent.selected)
    {
      return;
    }
    this.highlightedComponent = new HighlightedComponent(photoComponent, index);
    photoComponent.emitSelectedEvent();
  }
}
