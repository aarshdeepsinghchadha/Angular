import { Component } from '@angular/core';
import { ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: ingredients[] = [
    new ingredients('Apples',5),
    new ingredients('Tomatoes',10)
  ];
}
