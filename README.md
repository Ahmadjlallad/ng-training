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
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// tall how the app will be fit togother 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
    ],
    providers: [],
    // bootstrap component should be recognize in the html file
    // if we did add a new component we should add it in declarations array and 
    bootstrap: [AppComponent]
    /*
    * declarations—this application's lone component.
      imports—import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
        providers—the service providers.
      bootstrap—the root component that Angular creates and inserts into the index.html host web page.
    * */
})
export class AppModule {
}

```

## components

- to create a component using the cli
- or create it by your self this is done creating 4 files and adding

```ts
  import {Component} from "@angular/core";

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
    stayles: [`
    h3 {
      color: "blue";
    }
    `]
})
export class ServerComponent {

}

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
using it its simlar to onChange and value in react its allow us to bind the value in two way
```
## directives 
- are instrucins in the dom

- components are kind like a directives with template
- strucuer directives indecated by *
  - it change the dom by adding or removing
    - *ngIf="" has to return a booline
    - or *ngFor = "let nameOfTempVar nameOfTheItterbalVar"
  - attrebute directives
    - dont add or change the dom but it change the elemant it self
    - like ngStyle we can bind it using [] notion
    [ngStyle] = { backGroundColor: getColor() } it allow to update style dynmicly
    - [ngClass] same as ngStyle