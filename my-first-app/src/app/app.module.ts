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

import { FontFoundComponent } from './component/not-found/not-found.component';
import { AppRouting } from './appRouter.module';
import { GardeService } from './component/not-found/gared.service';
import { MainHomeComponent } from './component/main-home/main-home.component';
import { ServiceTrComponent } from './component/service-tr/service-tr.component';
import { HomeObservablesComponent } from './component/home-observables/home.component';
import { UserObservablesComponent } from './component/user-observables/user.component';
import { TdComponent } from './component/td/td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrComponent } from './component/tr/tr.component';
import { FrComponent } from './component/fr/fr.component';
import { PipsComponent } from './component/pips/pips.component';
import { ShortensPip } from './component/pips/shorten.pipe';
import { FilterPipe } from './component/pips/filter.pipe';
import { HttpSectionComponent } from './component/http-section/http-section.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './component/http-section/auth-interceptor.service';
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
    MainHomeComponent,
    ServiceTrComponent,
    HomeObservablesComponent,
    UserObservablesComponent,
    TdComponent,
    TrComponent,
    FrComponent,
    PipsComponent,
    ShortensPip,
    FilterPipe,
    HttpSectionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AccountService,
    LoggingService,
    NavService,
    userService,
    ServersService,
    HttpClientModule,
    GardeService,
    // this is a token that tell angular its http req
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
