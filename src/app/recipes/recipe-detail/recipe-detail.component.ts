import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model' 
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe
  constructor(private recipeService : RecipeService) { 
  }

  ngOnInit() {
  }

  addToShoppingList() {
    console.log("Add Ing to Shopping List")
    this.recipeService.addIngToShoppingList(this.recipe.ingredients)
  }

}
