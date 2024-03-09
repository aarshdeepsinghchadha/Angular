import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.foodandwine.com/thmb/oG2fM9FH1gsuwlcHKjEyi_q1W_Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-beef-chili-recipe-FT-BLOG1019-34a65696ed73447caa2668df7a101060.jpg'),
    new Recipe('Another Test Recipe','This is simply a test','https://www.foodandwine.com/thmb/oG2fM9FH1gsuwlcHKjEyi_q1W_Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-beef-chili-recipe-FT-BLOG1019-34a65696ed73447caa2668df7a101060.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
