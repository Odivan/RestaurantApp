import { Recipe } from '../recipes/recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';

@Injectable()
export class RecipeService {    
//recipeSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [ 
    new Recipe ('A test recipe 5','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg',
    [
        new Ingredient('bread', 2),
        new Ingredient('cheese', 4)
    ]),
    new Recipe ('A test recipe 2','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg',
    [
        new Ingredient('tomates', 4),
        new Ingredient('cheese', 4)
    ]),
    new Recipe ('A test recipe 3','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg',
    [
        new Ingredient('bread', 12),
        new Ingredient('cheese', 4)
    ])
  ];

  constructor(private ingredientsService: IngredientsService) { }

getRecipes() {
    return this.recipes.slice();
}

getRecipe(index: number) {
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
    
    this.ingredientsService.addIngredients(ingredients);
}

}