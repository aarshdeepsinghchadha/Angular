import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://www.foodandwine.com/thmb/oG2fM9FH1gsuwlcHKjEyi_q1W_Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-beef-chili-recipe-FT-BLOG1019-34a65696ed73447caa2668df7a101060.jpg'
        , [
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Test Recipe','This is simply a test','https://www.foodandwine.com/thmb/oG2fM9FH1gsuwlcHKjEyi_q1W_Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-beef-chili-recipe-FT-BLOG1019-34a65696ed73447caa2668df7a101060.jpg',
        [
          new Ingredient('Buns',2),
          new Ingredient('Tomato',1)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

    getRecipe(index: number){
      return this.recipes[index];
    }

      addIngredientsToShoppingList(ingredients:  Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}