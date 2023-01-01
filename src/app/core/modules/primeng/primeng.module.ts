import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
//import { ChipModule } from 'primeng/chip';

const modules:any[]=[
  MultiSelectModule,
  TableModule,
  InputTextModule,
  ButtonModule,
  TabViewModule,
  CardModule,
  DropdownModule,
  MessagesModule,
  MessageModule,
  //ChipModule
];

@NgModule({
  declarations: [],
  imports: [
    MultiSelectModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    //ChipModule
  ],
  exports:[
    MultiSelectModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    //ChipModule
  ]
})
export class PrimengModule { }