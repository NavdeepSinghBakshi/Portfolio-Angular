import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { UniquePipe } from '../../pipes/unique.pipe';
import { MemoizedPipe } from '../../pipes/memoized.pipe';
import { RenderHighlightDirective } from '../../directives/render-highlight.directive';
import { CommentPipe } from '../../pipes/comment.pipe';



@NgModule({
  declarations: [FilterPipe,UniquePipe,MemoizedPipe,CommentPipe,RenderHighlightDirective],
  imports: [
  ],
  exports:[FilterPipe,UniquePipe,MemoizedPipe,CommentPipe,RenderHighlightDirective]
})
export class SharedModule { }
