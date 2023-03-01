import { Component, Input} from '@angular/core';
import { OnChanges } from 'src/app/core/decorators/onChange.decorator';
import { Department } from '../custom-decorator/custom-decorator.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{

  @OnChanges<Department>(function(this:DepartmentComponent,department){
    const d = this._recordsMap.has(this.department?.depId);
      if (!d && department) {
        this.department.teachers = [];
        this._recordsMap.set(department.depId,this.department)
      }
  })
  @Input() department!: Department

  @OnChanges<string>(function(this:DepartmentComponent,teacher){
    if(this.teacher && this.teacher.trim().length){
      this.records.forEach(dep => {
        if(dep.depId == this.department.depId)
        {
          dep.teachers.push(this.teacher);
        }
      })
    }
  })
  @Input() teacher!: string

  private _recordsMap: Map<number,Department> = new Map();
  get records(): Department[]{
    return Array.from(this._recordsMap,([no,dep]) => dep);
  }
  constructor() { }

}