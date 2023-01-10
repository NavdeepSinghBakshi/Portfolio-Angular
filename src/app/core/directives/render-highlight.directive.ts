import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') color!: string;
  @Input('rate') rate!: number;
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    if (this.rate <= 100)
      this.color = 'green';
    else
      this.color = 'red';
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }
  /*@HostListener('mouseenter') onmouseenter(event: Event) {
    this.color = 'aqua';
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = '';
    this.renderer.setStyle(this.element.nativeElement, 'color', '');
  }*/
}