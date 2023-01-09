import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { WorkService } from 'src/app/common/services/work.service';

@Component({
  selector: 'app-update-favourate',
  templateUrl: './update-favourate.component.html',
  styleUrls: ['./update-favourate.component.css']
})
export class UpdateFavourateComponent implements OnInit,AfterViewInit {
  @Input('input') ParentData: any;
  @Output() selectedValue = new EventEmitter<string>();
  checkBoxPosition = 'before'
  srForm!: FormGroup;
  estimatorlist: Array<any> = [];
  assignedEstimatorList: any;
  @ViewChild('searchField',{static:false}) searchField:any;
  FruitData : any;
  constructor(public formbuilder: FormBuilder, private _workService: WorkService) { }

  ngAfterViewInit(): void {
    /*fromEvent(this.searchField.nativeElement,'keyup').
    pipe(debounceTime(1000),distinctUntilChanged(),map((x:any) => x['target']['value'])).
    subscribe((value:any)=>{
      if (value.length > 0) {
        this._workService.getFruitsByName(value).subscribe((data:any) => {
          this.estimatorlist = data;
        })
      }
      else {
        this.estimatorlist = this.FruitData;
      }
    })*/
    fromEvent(this.searchField.nativeElement,'keyup').
    pipe(debounceTime(1000),distinctUntilChanged(),switchMap((x:any) => this._workService.getFruitsByName(x['target']['value']))).
    subscribe(res => {
      this.estimatorlist = res;
    });
  }
  ngOnInit(){
    this.srForm = this.formbuilder.group({
      estimatorFilter: [''],
      selectedEstimator: [[]],
      assignedEstimator: [[]]
    })
    this.assignedEstimatorList = JSON.parse(JSON.stringify(this.ParentData));
    this._workService.getFruits().subscribe((data: any) => {
      this.estimatorlist = data;
      this.FruitData = data;
    })
  }
  sendToParent() {
    this.selectedValue.emit(this.assignedEstimatorList);
  }
  addEstimators() {debugger
    //this.colorChange = true;
    let selectedEstimator = this.srForm.controls['selectedEstimator'].value;
    if (!this.assignedEstimatorList) {
      this.assignedEstimatorList = [...this.srForm.controls['selectedEstimator'].value]
    }
    else {
      selectedEstimator.map((data: any) => {
        if (this.assignedEstimatorList.findIndex(function (data1: any) { return data1.id == data.id }) == -1) {
          this.assignedEstimatorList.push(data)
        }
      })
    }
    this.sendToParent();
  }
  removeEstimators() {
    //this.colorChange = false;
    let assignedEstimator = this.srForm.controls["assignedEstimator"].value;
    assignedEstimator.map((data: any) => {

      this.assignedEstimatorList.splice(this.assignedEstimatorList.findIndex(function (a: any) { return a.id === data.id }), 1)

    });
    this.sendToParent();
  }
}
