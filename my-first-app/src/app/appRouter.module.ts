import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/routing/home/home.component';
import { EditServerComponent } from './component/routing/servers/edit-server/edit-server.component';
import { ServerComponentRouter } from './component/routing/servers/server/server.component';
import { ServersComponentRouting } from './component/routing/servers/servers.component';
import { UserComponent } from './component/routing/users/user/user.component';
import { UsersComponent } from './component/routing/users/users.component';
import { FontFoundComponent } from './font-found/font-found.component';
import { GardeService } from './font-found/gared.service';
const appRoute: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/:userId/:name',
    canActivate: [GardeService],
    component: UserComponent,
  },
  {
    path: 'servers',
    component: ServersComponentRouting,
    children: [
      { path: ':id', component: ServerComponentRouter },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  { path: '**', component: FontFoundComponent },
  { path: 'redirect', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRouting {}
