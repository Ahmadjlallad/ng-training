import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from 'src/shared/ingredint.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountRef') amount: ElementRef;
  @ViewChild('nameRef') name: ElementRef;

  @Output('newShopping') newItemsInShopping = new EventEmitter<Ingredients>();
  newItemsInTheCart(e: SubmitEvent) {
    e.preventDefault();
    this.newItemsInShopping.emit(
      new Ingredients(
        this.name.nativeElement.value,
        Number.parseInt(this.amount.nativeElement.value)
      )
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
