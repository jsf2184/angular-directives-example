import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // On the element that this directive is on, bind the style backgroundColor to this string.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // We can make the various colors associated with this directive be settable properties.
  @Input() defaultColor = 'transparent';
  @Input() mouseDownColor = 'lightblue';
  @Input() mouseEnterColor = 'yellow';


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // set the style with the bound property
    console.log('BetterHighlightDirective.onMouseEnter(): ' + eventData);
    this.backgroundColor = this.mouseEnterColor;
  }

  @HostListener('mousedown') onMouseDown(eventData: Event) {
    console.log('BetterHighlightDirective.onMouseDown(): ' + eventData);
    // set the style with the renderer
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      this.mouseDownColor);
  }

  @HostListener('mouseup') onMouseUp(eventData: Event) {
    console.log('BetterHighlightDirective.onMouseUp(): ' + eventData);
    // set the style with the renderer
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      this.mouseEnterColor);
  }


  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // set the style with the bound property
    console.log('BetterHighlightDirective.onMouseLeave(): ' + eventData);
    this.backgroundColor = this.defaultColor;
  }

}
