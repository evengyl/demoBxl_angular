import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.color = "black"
    this.el.nativeElement.style.fontSize = "18px"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

}
