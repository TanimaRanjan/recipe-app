import {  Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Sugar', 15),
        new Ingredient('Lemon', 2),
        new Ingredient('Honey', 5)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }
}