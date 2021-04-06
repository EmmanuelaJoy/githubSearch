import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.cardHighlight('#28a745');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cardHighlight(null);
  }

  private cardHighlight(color) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
  constructor(private elem: ElementRef) { }

}
