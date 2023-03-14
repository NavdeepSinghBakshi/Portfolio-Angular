import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @ViewChild('container') section !: ElementRef<any>;
  @ViewChildren('sta') stat  !: QueryList<any>;
  start = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll')
  scroll(){debugger
    if((window.pageYOffset + window.innerHeight) > this.section.nativeElement.offsetTop && window.pageYOffset < (this.section.nativeElement.offsetTop + this.section.nativeElement.clientHeight)){
      if(!this.start){
        this.stat.forEach((sta)=>{
          this.startCount(sta.nativeElement);
        })
      }
      this.start = true;
    }
    else{
      this.stat.forEach((sta)=>{
        sta.nativeElement.textContent=0;
      });
      this.start = false;
    }
  }
  ngAfterViewInit(): void {
  }
  startCount(el:any){
    let max = el.dataset.max;
    let count = setInterval(()=>{
      el.textContent++;
      if(el.textContent == max){
        clearInterval(count);
      }
    },10)
  }
}
