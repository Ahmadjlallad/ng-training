import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myFirstDirective]',
})
export class MyDirectiveComponent implements OnInit {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'green'; // not a good practice
  }
  ngOnInit(): void {}
}
