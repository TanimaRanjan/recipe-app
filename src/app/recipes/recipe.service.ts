import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    
    private recipes: Recipe[] = [
        new Recipe(
            'Stawberry Pie ', 
            'This is a test recipe', 
            'https://picsum.photos/200/300?image=1080',
            [
                new Ingredient('Strawberry', 2),
                new Ingredient('Sugar', 3),
                new Ingredient('Flour', 1.5),
                new Ingredient('Butter', 2)
            ]),
        new Recipe(
            'Raspberry Chesscake ', 
            'This is a test recipe 2 ', 
            'https://picsum.photos/200/300?image=102',
            [
                new Ingredient('Raspberry', 2),
                new Ingredient('Cream Cheese', 2),
                new Ingredient('Sugar', 2),
                new Ingredient('Milk', 2)
            ])
       
     ];
   
     getRecipes() {
         return this.recipes.slice();
     }

        

}