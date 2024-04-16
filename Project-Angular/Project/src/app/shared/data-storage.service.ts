import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class DAtaStorageService {
    constructor(private http: HttpClient,private recipeService: RecipeService) {}


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-3337c-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(response => 
            {
                console.log(response)
            }
        );
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-3337c-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                     ingredients: recipe.ingredients ? recipe.ingredients: []
                };
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
    )}


}