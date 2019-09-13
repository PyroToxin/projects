import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another test recipe', 'This is another test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-grilled-cheese-pancakes-horizontal-still004-1567017656.jpg?crop=1.00xw:0.892xh;0,0.0427xh&resize=980:*'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
