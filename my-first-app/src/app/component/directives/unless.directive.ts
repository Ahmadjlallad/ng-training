import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(cond: boolean) {
    if (cond) this.vcRef.clear();
    else this.vcRef.createEmbeddedView(this.templateRef);
  }
  // we got a ref to template and vcRef ViewContainerRef is where the template will be render
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
