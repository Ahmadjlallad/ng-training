import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("a Test", "des", "https://ng-bootstrap.github.io/img/logo-stack.png")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
