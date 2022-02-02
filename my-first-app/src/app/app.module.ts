import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {WarningAlertComponent} from "./warning-alart/warning-alart.component";

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
