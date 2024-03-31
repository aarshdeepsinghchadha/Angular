import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
    

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute){}
    private subsription: Subscription;

  ngOnInit() {
    this.subsription = this.recipeService.recipesChanged
      .subscribe(
        (recipe: Recipe[]) => {
          this.recipes = recipe;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }

  recipes: Recipe[];

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy(){
    this.subsription.unsubscribe();
  }

}
