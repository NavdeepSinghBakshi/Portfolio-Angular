import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  products : any;
  constructor(private _workService : WorkService) { }

  ngOnInit(){
   this.getProducts();
  }
  getProducts(){
    this._workService.getProducts().subscribe(data =>{
       this.products = data;
    })
  }
  trackByMethod(index:number,element:any){
    return element.id;
  }
}
