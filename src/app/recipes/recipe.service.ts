import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test recipe', 'https://picsum.photos/200/300?image=1080'),
        new Recipe('Test Recipe 2 ', 'This is a test recipe 2 ', 'https://picsum.photos/200/300?image=102')
       
     ];
   
     getRecipes() {
         return this.recipes.slice();
     }

        

}