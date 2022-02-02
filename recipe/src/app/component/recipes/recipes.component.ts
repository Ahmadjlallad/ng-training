import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("a Test", "des", "https://ng-bootstrap.github.io/img/logo-stack.png")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
