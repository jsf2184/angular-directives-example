import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {

  // On the element that this directive is on, bind the style backgroundColor to this string.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // We can make the various colors associated with this directive be settable properties.
  @Input() defaultColor = 'pink';
  @Input() mouseDownColor = 'lightblue';
  @Input() mouseEnterColor = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // set the style with the bound property
    console.log('BestHighlightDirective.onMouseEnter(): ' + eventData);
    this.backgroundColor = this.mouseEnterColor;
  }

  @HostListener('mousedown') onMouseDown(eventData: Event) {
    console.log('BestHighlightDirective.onMouseDown(): ' + eventData);
    this.backgroundColor = this.mouseDownColor;
  }

  @HostListener('mouseup') onMouseUp(eventData: Event) {
    console.log('BestHighlightDirective.onMouseUp(): ' + eventData);
    this.backgroundColor = this.mouseEnterColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // set the style with the bound property
    console.log('BestHighlightDirective.onMouseLeave(): ' + eventData);
    this.backgroundColor = this.defaultColor;
  }

}
