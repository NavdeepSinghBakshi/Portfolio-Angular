import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') color!: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.color = '';
  }
  @HostListener('mouseenter') onmouseenter(event: Event) {
    this.color = 'aqua';
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = '';
    this.renderer.setStyle(this.element.nativeElement, 'color', '');
  }
}