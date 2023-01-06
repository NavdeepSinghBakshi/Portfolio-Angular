import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { UniquePipe } from '../../pipes/unique.pipe';
import { MemoizedPipe } from '../../pipes/memoized.pipe';



@NgModule({
  declarations: [FilterPipe,UniquePipe,MemoizedPipe],
  imports: [
  ],
  exports:[FilterPipe,UniquePipe,MemoizedPipe]
})
export class SharedModule { }
