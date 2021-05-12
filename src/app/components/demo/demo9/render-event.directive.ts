import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRenderEvent]'
})
export class RenderEventDirective {

  constructor(private el : ElementRef) { }

  @HostListener("dblclick")
  onDoubleClick()
  {
    this.el.nativeElement.style.color = "red"
  }

  @HostListener("click")
  onDoubleClick2()
  {
    this.el.nativeElement.style.color = "white"
  }

  @HostListener("mouseenter")
  tata()
  {
    this.el.nativeElement.style.fontSize = "18px"
  }

  @HostListener("mouseleave")
  toto()
  {
    this.el.nativeElement.style.fontSize = "14px"
  }

}
