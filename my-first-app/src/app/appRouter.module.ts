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
import { HomeObservablesComponent } from './component/observables/home-observables/home.component';
import { UserObservablesComponent } from './component/observables/user-observables/user.component';

import { PipsComponent } from './component/pips/pips.component';
import { HttpSectionComponent } from './component/http-section/http-section.component';
const appRoute: Routes = [
  { path: '', component: MainHomeComponent },
  { path: 'pips', component: PipsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'forms',
    loadChildren: () =>
      import('./component/forms/forms.module').then((m) => m.NGFormsModule),
  },

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
  { path: 'http', component: HttpSectionComponent },
  {
    path: 'observables',
    loadChildren: () =>
      import('./component/observables/observables.module').then(
        (m) => m.ObservablesModule
      ),
  },


  { path: 'services', component: ServiceTrComponent },
  { path: 'redirect', redirectTo: '/' },
  { path: '**', component: FontFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRouting {}
