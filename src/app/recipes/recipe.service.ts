import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Quesadilla',
      'A delicious chicken, steak, and cheese quesadilla!',
      'https://cdn.pixabay.com/photo/2017/03/07/18/21/quesadillas-2124910__340.jpg',
      [
        new Ingredient('tortilla', 1),
        new Ingredient('meat', 2),
        new Ingredient('cheese', 1)
      ]),
    new Recipe(
      'Pepperoni Pizza Rolls',
      'Tasty bite sized pizza rolls!',
      'https://cdn.pixabay.com/photo/2015/04/08/13/14/pizza-712667_1280.jpg',
      [
        new Ingredient('crust', 1),
        new Ingredient('pepperoni', 5),
        new Ingredient('cheese', 1)
      ])
  ];

  constructor(private shoppingService: ShoppingService){}

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  recipesToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }
}
