import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeObservablesComponent } from './home-observables/home.component';
import { UserObservablesComponent } from './user-observables/user.component';
const observablesRoutes: Routes = [
  { path: 'home-observables', component: HomeObservablesComponent },

  {
    path: 'user-observables/:id',
    component: UserObservablesComponent,
  },
];
@NgModule({
  declarations: [UserObservablesComponent, HomeObservablesComponent],
  imports: [RouterModule.forChild(observablesRoutes)],
})
export class ObservablesModule {}
