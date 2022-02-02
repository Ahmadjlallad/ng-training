import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/shared/ingredint.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('apples', 5),
    new Ingredients('onion', 6),
  ];

  constructor() {}

  ngOnInit(): void {}
}
