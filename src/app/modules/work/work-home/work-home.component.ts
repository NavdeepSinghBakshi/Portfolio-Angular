import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.css']
})
export class WorkHomeComponent implements OnInit {
  btnIcon : boolean = true;
  list : any[] = [];
  constructor() { }

  ngOnInit(){
    this.list = [
      { id: 1, link: 'data-binding', icon: 'folder', title: 'Data-Binding' },
      { id: 2, link: 'reactive-form', icon: 'ballot', title: 'Reactive Form' },
      { id: 3, link: 'cascading-dropdown', icon: 'domain', title: 'Cascading Dropdown' },
      { id: 4, link: 'update-list', icon: 'backup', title: 'Update List' },
      { id: 5, link: 'token-interceptor', icon: 'vpn_key', title: 'Interceptor' },
      { id: 6, link: 'custom-directive', icon: 'table_chart', title: 'Directive' },
      { id: 7, link: 'custom-decorator', icon: 'data_usage', title: 'Decorator' },
      { id: 8, link: 'animation', icon: 'live_tv', title: 'Animation' },
      { id: 9, link: 'rxjs', icon: 'trending_up', title: 'Rxjs' },
      { id: 10, link: 'file-preview', icon: 'attach_file', title: 'File-Preview' },
      { id: 11, link: 'products', icon: 'add_shopping_cart', title: 'Products' },
      { id: 12, link: 'counter', icon: 'attach_money', title: 'Counter' },
      { id: 13, link: 'dtl', icon: 'assignment', title: 'Dynamic Table Loading' },
      { id: 14, link: 'fusion-chart', icon: 'bar_chart', title: 'Fusion Chart' },
      { id: 15, link: 'dos', icon: 'credit_card', title: 'Data On Scroll' }

    ]
  }
  openBox(){
    this.btnIcon = false;
 }
 closeBox(){
    this.btnIcon = true;
 }
}
