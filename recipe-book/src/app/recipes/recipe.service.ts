import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
     new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg', []),
     new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
   ];

  constructor() { }
  getRecipe(){
    return this.recipes;
  }

}
