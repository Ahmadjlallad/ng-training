import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alart/warning-alart.component';
import { GameControlComponent } from './component/game-control/game-control.component';
import { OddComponent } from './component/game-control/odd/odd.component';
import { EvenComponent } from './component/game-control/even/even.component';
import { MyDirectiveComponent } from './component/my-directive/my-directive.component';
import { DirectivesDirective } from './component/directives/directives.directive';
import { UnlessDirective } from './component/directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    MyDirectiveComponent,
    DirectivesDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
