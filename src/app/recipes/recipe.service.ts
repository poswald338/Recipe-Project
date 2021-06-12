import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  // recipesChangedSubject: BehaviorSubject<Recipe[]>
  // recipesChanged: Observable<any>

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Quesadilla',
  //     'A delicious chicken, steak, and cheese quesadilla!',
  //     'https://cdn.pixabay.com/photo/2017/03/07/18/21/quesadillas-2124910__340.jpg',
  //     [
  //       new Ingredient('tortilla', 1),
  //       new Ingredient('meat', 2),
  //       new Ingredient('cheese', 1)
  //     ]),
  //   new Recipe(
  //     'Pepperoni Pizza Rolls',
  //     'Tasty bite sized pizza rolls!',
  //     'https://cdn.pixabay.com/photo/2015/04/08/13/14/pizza-712667_1280.jpg',
  //     [
  //       new Ingredient('crust', 1),
  //       new Ingredient('pepperoni', 5),
  //       new Ingredient('cheese', 1)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingService: ShoppingService){
    // this.recipesChanged = new Subject<Recipe[]>()
    // this.recipesChanged = this.recipesChangedSubject.asObservable()
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
    // console.log(this.recipes)
  }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  recipesToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }
}
