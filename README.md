# angular

## angular V Release every 6 months

## creating an Angular app using cli npm install -g npm@8.4.0

- using ng new [name of the app]
- ng serve for running the server

## file structure

### 4 files

- template HTML
- spec.ts for test
- module.ts tall angular which piece belong to this component
- scss or css

## How the angular app start

- the index html file will be served to the browser
- in the app. Component.ts there is a decorator in the decrator we have a selector property
- we have a script will be injected to html and appModule will be bootstrap

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// tall how the app will be fit togother
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  // bootstrap component should be recognize in the html file
  // if we did add a new component we should add it in declarations array and
  bootstrap: [AppComponent],
  /*
    * declarations—this application's lone component.
      imports—import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
        providers—the service providers.
      bootstrap—the root component that Angular creates and inserts into the index.html host web page.
    * */
})
export class AppModule {}
```

## components

- to create a component using the cli
- or create it by your self this is done creating 4 files and adding

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-server", // should be unique templateUrl: "./server.component.html"
  // name unique to dont over wirte existing component
  // we could use any type of css selector
  // selector: ".app-server",
  // <div class="app-server">
  // selector: "[app-server]",
  // <div app-server>
  // selector: "#app-server",
  //  point the html file
  // inline styles
  styles: [
    `
      h3 {
        color: "blue";
      }
    `,
  ],
})
export class ServerComponent {}
```

## Data Binding allow communication between two Component

- using string interpolation {{}}
  - <!-- only strings --> its has to resolve it to string
  - we can call a methods and insure it will return a string
- property Binding [property]="data"
  - [disabled]="allowNewServer" directly binding a property tp dom element
  - we can bind to all the html or dom elemant
- event Binding [(event)="expression"]
- Two Way binding ([ngModel]="data")

## events

```angular2html
  (click)= "funcName($event)"
   <!-- $event reserve world -->
```

- two way data binding

```angular2html
<input class="form-control" type="text" [(ngModel)]="serverName" />
using it its similar to onChange and value in react its allow us to bind the value in two way
```

## directives

- are instructing in the dom

- components are kind like a directives with template
- structure directives indicated by \*
  - it change the dom by adding or removing
    - \*ngIf="" has to return a boolin
    - or \*ngFor = "let nameOfTempVar nameOfTheIttirbalVar"
  - attribute directives
    - don't add or change the dom but it change the element it self
    - like ngStyle we can bind it using [] notion
      [ngStyle] = { backGroundColor: getColor() } it allow to update style dynamically
    - [ngClass] same as ngStyle

## bind vars from a parent to child

using `@Input()` to get access to the parent probities

```ts
export class Cockpit implements OnInit {
  constructor() {}

  @Input() element: {
    type: string;
    name: string;
    content: string;
  };
  ngOnInit() {}
}
```

```angular2html

  <server-element
    *ngFor="let serverElement of serverElements"
    [element]="serverElement"
  ></server-element>
```

## create a custom event to listen on it using its like passing a setState to child

```ts
export class Cockpit {
  constructor() {}
  @Output("cServer") serverCreated = new EventEmitter<{ serverName: string; serverContent }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string; serverContent }>();
  onAddCreated(){
    this.serverCreated.emit({this.serverName});
  }

}

```

## to get a reference to element

```html
<input #serverRef />
```

and we can use it in the template its like the react ref
and we can get it by using any bind way

- ViewChild decorator it works as react ref exactly

```ts
@ViewChild()
```

## ng-content children like

```angular2html
<ng-content>ahmad</ng-content>
```

## custom directives

- property directives

```ts
// first we have to create a directive class
@import {
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

```

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  // Input have to be the same as the selector
  @Input() set appUnless(condition: boolean) {
    if (condition) this.vcRef.clear();
    else this.vcRef.createEmbeddedView(this.templateRef);
  }
  // we got a ref to template and vcRef ViewContainerRef is where the template will be render
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

```Angular2Html
<container-element [ngSwitch]="switch_expression">
<some-element *ngSwitchCase="match_expression_1">...</some-element>
...
<some-element *ngSwitchDefault>...</some-element>
</container-element>

```

- if we provide an service in the parent and we also provide it in the child the child will over wirte the parent

## [angular injector rules](https://angular.io/guide/hierarchical-dependency-injection)

When you provide services in a component, that service is available by way of the ElementInjector at that component instance. It may also be visible at child component/directives based on visibility rules described in the resolution rules section.

- When the component instance is destroyed, so is that service instance.
- If the component's injector lacks the provider, it passes the request up to its parent component's ElementInjector.
- If Angular still doesn't find the provider, it throws an error.
- the hights level is the app.module.ts
