import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoizedFn'
})
export class MemoizedPipe implements PipeTransform {

  transform(fn: Function, ...args: unknown[]): unknown {
    return fn(...args);
  }

}