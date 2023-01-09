import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { UniquePipe } from '../../pipes/unique.pipe';
import { MemoizedPipe } from '../../pipes/memoized.pipe';
import { RenderHighlightDirective } from '../../directives/render-highlight.directive';



@NgModule({
  declarations: [FilterPipe,UniquePipe,MemoizedPipe,RenderHighlightDirective],
  imports: [
  ],
  exports:[FilterPipe,UniquePipe,MemoizedPipe,RenderHighlightDirective]
})
export class SharedModule { }
