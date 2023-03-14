import { Component, OnInit } from '@angular/core';
import { IActivity, IColumn } from 'src/app/common/interfaces/configuration';
import { CanComponentLeave } from 'src/app/core/guards/cancel.guard';

@Component({
  selector: 'app-dynamic-table-loading',
  templateUrl: './dynamic-table-loading.component.html',
  styleUrls: ['./dynamic-table-loading.component.css']
})
export class DynamicTableLoadingComponent implements OnInit,CanComponentLeave {
  public count: number = 0;
  checkboxColumn1 = false
  checkboxColumn2 = false
  checkboxColumn3 = false
  checkboxColumn4 = false
  checkboxColumn5 = false
  update : number = 0;
  skillId = 1;
  Subject : any;
  totalWeightage = 0;
  totalColumn1 = 0;
  totalColumn2 = 0;
  totalColumn3 = 0;
  totalColumn4 = 0;
  totalColumn5 = 0;
  public arrActivity: IActivity[] = [];
  enableLink: boolean = false;
  ColumnIds: Array<IColumn> = [];
  constructor() { }

  ngOnInit(){
    this.arrActivity = [
    {topicName:'Topic1',columnName1:'',columnName2:'',columnName3:'',columnName4:'',columnName5:'',column1WeightagePercent:0,column2WeightagePercent:0,column3WeightagePercent:0,column4WeightagePercent:0,column5WeightagePercent:0,weightagePercent:5},
    {topicName:'Topic2',columnName1:'',columnName2:'',columnName3:'',columnName4:'',columnName5:'',column1WeightagePercent:0,column2WeightagePercent:0,column3WeightagePercent:0,column4WeightagePercent:0,column5WeightagePercent:0,weightagePercent:25},
    {topicName:'Topic3',columnName1:'',columnName2:'',columnName3:'',columnName4:'',columnName5:'',column1WeightagePercent:0,column2WeightagePercent:0,column3WeightagePercent:0,column4WeightagePercent:0,column5WeightagePercent:0,weightagePercent:20},
    {topicName:'Topic4',columnName1:'',columnName2:'',columnName3:'',columnName4:'',columnName5:'',column1WeightagePercent:0,column2WeightagePercent:0,column3WeightagePercent:0,column4WeightagePercent:0,column5WeightagePercent:0,weightagePercent:35},
    {topicName:'Topic5',columnName1:'',columnName2:'',columnName3:'',columnName4:'',columnName5:'',column1WeightagePercent:0,column2WeightagePercent:0,column3WeightagePercent:0,column4WeightagePercent:0,column5WeightagePercent:0,weightagePercent:15}]
    
    this.calculateTotalWeightageColumn();
  }
  deleteMultipleEffortDistribution() {
    let discardChanges: boolean = confirm("Are you sure want to Delete Weightage Distribution ?");
    if (!discardChanges) {
      return;
    }
    for (let j = 0; j < this.ColumnIds.length; j++) {
      for (let i = 0; i < this.arrActivity.length; i++) {
        if (this.ColumnIds[j].id < 2) {
          this.arrActivity[i].column1WeightagePercent = this.arrActivity[i].column2WeightagePercent;
          this.arrActivity[i].columnName1 = this.arrActivity[i].columnName2;
        }
        if (this.ColumnIds[j].id < 3) {
          this.arrActivity[i].column2WeightagePercent = this.arrActivity[i].column3WeightagePercent;
          this.arrActivity[i].columnName2 = this.arrActivity[i].columnName3;
        }
        if (this.ColumnIds[j].id < 4) {
          this.arrActivity[i].column3WeightagePercent = this.arrActivity[i].column4WeightagePercent;
          this.arrActivity[i].columnName3 = this.arrActivity[i].columnName4;
        }
        if (this.ColumnIds[j].id < 5) {
          this.arrActivity[i].column4WeightagePercent = this.arrActivity[i].column5WeightagePercent;
          this.arrActivity[i].columnName4 = this.arrActivity[i].columnName5;
        }
        this.arrActivity[i].column5WeightagePercent = 0;
        this.arrActivity[i].columnName5 = "";
      }
      this.count--;
    }
    this.checkboxColumn1 = false;
    this.checkboxColumn2 = false;
    this.checkboxColumn3 = false;
    this.checkboxColumn4 = false;
    this.checkboxColumn5 = false;
    this.ColumnIds = [];
    this.enableLink = false;
  }
  editEffortDistribution() {
    if (this.count < 5) {
      this.count += 1;
    }
    else
      alert("It has reached its limit of 5");
  }
  loadingEmptyCustomActivities(noOfRows: any) {

    for (let i = 1; i <= noOfRows; i++)
      this.arrActivity.push(new IActivity());
  }
  removeNewSizeRow(row: any) {
    if (this.arrActivity.length != 1)
      this.arrActivity = this.arrActivity.filter(t => t != this.arrActivity[row]);
  }
  calculateTotalWeightageColumn() {
     this.totalWeightage = 0;
     this.arrActivity.forEach((activity) => {
       activity.weightagePercent = (activity.weightagePercent.toString().trim() != "") ? activity.weightagePercent : 0;
       this.totalWeightage = this.totalWeightage + parseFloat(activity.weightagePercent.toString());
     })
  }
  calculateTotalWeightageColumn1() {
    this.totalColumn1 = 0;
    this.arrActivity.forEach((activity) => {
      activity.column1WeightagePercent = (activity.column1WeightagePercent.toString().trim() != "") ? activity.column1WeightagePercent : 0;
      this.totalColumn1 = this.totalColumn1 + parseFloat(activity.column1WeightagePercent.toString());
    })
  }
  calculateTotalWeightageColumn2() {
    this.totalColumn2 = 0;
    this.arrActivity.forEach((activity) => {
      activity.column2WeightagePercent = (activity.column2WeightagePercent.toString().trim() != "") ? activity.column2WeightagePercent : 0;
      if (activity.column2WeightagePercent != null)
        this.totalColumn2 = this.totalColumn2 + parseFloat(activity.column2WeightagePercent.toString());
    })
  }
  calculateTotalWeightageColumn3() {
    this.totalColumn3 = 0;
    this.arrActivity.forEach((activity) => {
      activity.column3WeightagePercent = (activity.column3WeightagePercent.toString().trim() != "") ? activity.column3WeightagePercent : 0;
      this.totalColumn3 = this.totalColumn3 + parseFloat(activity.column3WeightagePercent.toString());
    })
  }
  calculateTotalWeightageColumn4() {
    this.totalColumn4 = 0;
    this.arrActivity.forEach((activity) => {
      activity.column4WeightagePercent = (activity.column4WeightagePercent.toString().trim() != "") ? activity.column4WeightagePercent : 0;
      this.totalColumn4 = this.totalColumn4 + parseFloat(activity.column4WeightagePercent.toString());
    })
  }
  calculateTotalWeightageColumn5() {
    this.totalColumn5 = 0;
    this.arrActivity.forEach((activity) => {
      activity.column5WeightagePercent = (activity.column5WeightagePercent.toString().trim() != "") ? activity.column5WeightagePercent : 0;
      this.totalColumn5 = this.totalColumn5 + parseFloat(activity.column5WeightagePercent.toString());
    })
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  setdefaultInputbox(inputTextvalue: string, id: string) {
    if (inputTextvalue.length > 0) {
      var weightageColumnName = document.getElementById(id) as HTMLInputElement;
      weightageColumnName.style.borderStyle = "Solid";
      weightageColumnName.style.borderColor = "Black";
      weightageColumnName.style.borderWidth = "1px"
    }
  }
  resizetextarea(e: any) {
    e.target.style.height = (e.target.scrollHeight) + "px";
  }
  onSelectColumn(isSelected: any, selectedId: any) {
    if (selectedId == 1) {
      this.checkboxColumn1 = true;
    }
    if (selectedId == 2) {
      this.checkboxColumn2 = true;
    }
    if (selectedId == 3) {
      this.checkboxColumn3 = true;
    }
    if (selectedId == 4) {
      this.checkboxColumn4 = true;
    }
    if (selectedId == 5) {
      this.checkboxColumn5 = true;
    }
    this.enableLink = true;
    if (isSelected.checked) {
      this.ColumnIds.push({ id: selectedId });
    }
    else {
      const index: number = this.ColumnIds.findIndex(x => x.id === selectedId);
      if (index !== -1) {
        this.ColumnIds.splice(index, 1);
      }
      if (this.ColumnIds.length == 0) {
        this.enableLink = false;
      }
    }
    this.ColumnIds.sort(function (a, b) { return b.id - a.id });
  }
  canLeave():boolean{
    //if(this.EmployeeForm.dirty)
    if(true)
    {
      return window.confirm('You have some unsaved changes.You want to exist.')
    }
    return true;
  }
}
