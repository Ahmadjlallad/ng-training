import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/routing/home/home.component';
import { EditServerComponent } from './component/routing/servers/edit-server/edit-server.component';
import { ServerComponentRouter } from './component/routing/servers/server/server.component';
import { ServersComponentRouting } from './component/routing/servers/servers.component';
import { UserComponent } from './component/routing/users/user/user.component';
import { UsersComponent } from './component/routing/users/users.component';
import { FontFoundComponent } from './component/not-found/not-found.component';
import { GardeService } from './component/not-found/gared.service';
import { ServiceTrComponent } from './component/service-tr/service-tr.component';
import { MainHomeComponent } from './component/main-home/main-home.component';
import { HomeObservablesComponent } from './component/home-observables/home.component';
import { UserObservablesComponent } from './component/user-observables/user.component';
import { TdComponent } from './component/td/td.component';
import { FrComponent } from './component/fr/fr.component';
const appRoute: Routes = [
  { path: '', component: MainHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'td', component: TdComponent },
  { path: 'fr', component: FrComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':userId/:name',
        canActivate: [GardeService],
        component: UserComponent,
      },
    ],
  },

  {
    path: 'servers',
    component: ServersComponentRouting,
    children: [
      { path: ':id', component: ServerComponentRouter },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  { path: 'home-observables', component: HomeObservablesComponent },
  { path: 'user-observables/:id', component: UserObservablesComponent },
  { path: 'services', component: ServiceTrComponent },
  { path: 'redirect', redirectTo: '/' },
  { path: '**', component: FontFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRouting {}
