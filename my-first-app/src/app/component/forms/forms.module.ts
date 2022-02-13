import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrComponent } from './fr/fr.component';
import { TdComponent } from './td/td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const formsRouter: Routes = [
  { path: 'td', component: TdComponent },
  { path: 'fr', component: FrComponent },
];
@NgModule({
  declarations: [TdComponent, FrComponent],
  imports: [
    RouterModule.forChild(formsRouter),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class NGFormsModule {}
/**
 * loadChildren: () =>
      import("./recipes/recipes.module").then((m) => m.RecipesModule),
 */
