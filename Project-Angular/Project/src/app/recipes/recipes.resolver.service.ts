import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DAtaStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DAtaStorageService, private recipesService: RecipeService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes =  this.recipesService.getRecipes();

        if(recipes.length === 0){
        return this.dataStorageService.fetchRecipes();
        }
        else{
            return recipes;
        }
    }

}