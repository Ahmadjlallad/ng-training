import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';
import { WarningAlertComponent } from './component/warning-alart/warning-alart.component';
import { GameControlComponent } from './component/game-control/game-control.component';
import { OddComponent } from './component/game-control/odd/odd.component';
import { EvenComponent } from './component/game-control/even/even.component';
import { MyDirectiveComponent } from './component/my-directive/my-directive.component';
import { DirectivesDirective } from './component/directives/directives.directive';
import { UnlessDirective } from './component/directives/unless.directive';
import { AccountService } from 'shared/account.service';
import { LoggingService } from 'shared/logging.service';
import { ActiveUsersComponent } from './component/active-users/active-users.component';
import { InactiveUsersComponent } from './component/inactive-users/inactive-users.component';
import { NavService } from 'shared/nav.service';
import { HeaderComponent } from './component/header/header.component';
import { userService } from 'shared/user.service';
import { HomeComponent } from './component/routing/home/home.component';
import { ServersComponentRouting } from './component/routing/servers/servers.component';
import { EditServerComponent } from './component/routing/servers/edit-server/edit-server.component';
import { ServerComponentRouter } from './component/routing/servers/server/server.component';
import { ServersService } from './component/routing/servers/servers.service';
import { UserComponent } from './component/routing/users/user/user.component';
import { UsersComponent } from './component/routing/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { FontFoundComponent } from './font-found/font-found.component';
import { AppRouting } from './appRouter.module';
import { GardeService } from './font-found/gared.service';

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
    ActiveUsersComponent,
    InactiveUsersComponent,
    HeaderComponent,
    HomeComponent,
    ServersComponentRouting,
    EditServerComponent,
    ServerComponentRouter,
    UserComponent,
    UsersComponent,
    FontFoundComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRouting],
  providers: [
    AccountService,
    LoggingService,
    NavService,
    userService,
    ServersService,
    GardeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
