# presentation

1. history of web development

1. why we would use angular

   - [Angular](https://angular.io/) is an Open Source JavaScript Front End Framework based on TypeScript to create single page web apps
   - component based Framework
     - make it ease to create reusable component, fixing bugs
   - allow to make a universal structure for managing files
   - angular is one stop shop
     - routing
     - animation
     - state management

1. angular core features

   - NgModule - its a way to organize component by butting every thing related to the collection by adding the metadata in the decorator
     in new app we have a default NgModule

     ```ts
     import { NgModule } from "@angular/core";
     import { FormsModule } from "@angular/forms";
     import { BrowserModule } from "@angular/platform-browser";
     import { HttpClientModule } from "@angular/common/http";
     import { AppComponent } from "./app.component";
     import { UsersComponent } from "./component/users/users.component";
     import { HeaderComponent } from "./component/header/header.component";
     import { UserComponent } from "./component/users/user/user.component";
     import { UserWidgetComponent } from "./component/users/user/user-widget/user-widget.component";
     @NgModule({
       declarations: [
         AppComponent,
         UsersComponent,
         HeaderComponent,
         UserComponent,
         UserWidgetComponent,
       ],
       imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
       providers: [],
       bootstrap: [AppComponent],
     })
     export class AppModule {}
     ```

   - NgComponent

     - component in angular consist from 4 files
       - first one is the .html file or the template this is the markup file where you write the html markup
       - .css or scss/sass or any other style sheet
       - .ts file where the local state for the application will be
       - .spec.ts for unit testing

   - services
     - a way to share app state between component and spread logic from the component
     - dependency injections
       - to use the services we have to inject the service in the component angular uses the dependency injection design pattern
   - directives
   - Pipes
   - router

1. how angular transform your code
