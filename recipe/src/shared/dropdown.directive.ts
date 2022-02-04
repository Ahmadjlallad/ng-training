import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostListener('click') toggleOpen() {
    this.elRef.nativeElement.classList.toggle('open');
  }
  constructor(private elRef: ElementRef<HTMLDivElement>) {}
}
