import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[DirectivesDirective]',
})
export class DirectivesDirective implements OnInit {
  // @HostListener reacting to an event on the element being on
  // bind it from out side
  @Input() defColor: string = 'transparent ';
  @Input() hightLightColor: string = 'blue';

  @HostListener('mouseenter') mouseEnter(e: MouseEvent) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red '
    // );
    this.backgroundColor = this.hightLightColor;
  }
  @HostListener('mouseleave') mouseleave(e: MouseEvent) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent '
    // );
    this.backgroundColor = this.defColor;
  }
  // get value from the element directly
  @HostBinding('style.backgroundColor') backgroundColor: any;

  // renderer is Angular renders a template into DOM. You can use custom rendering to intercept rendering calls, or to render to something other than DOM.
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // console.log('dir');
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue '
    // );
  }
}
