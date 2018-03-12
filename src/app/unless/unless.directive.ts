import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

// This Directive is the opposite of *ngIf,
// that is, it does its thing when it is false instead of true
//

export class UnlessDirective {

  // We provide a setHandler which gets control whenever the depended
  // on value changes.
  //
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // Our constructor captures the TemplateRef which represents the HTML which
  // we will conditionally display. Additionally, we need the ViewContainerRef
  // that we'll instruct whether or not to display this info.
  //
  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef) {
  }
}
