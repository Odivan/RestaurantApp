import { Recipe } from '../recipes/recipes.model';

export class RecipeService {
recipes: Recipe[] = [ 
    new Recipe ('A test recipe 5','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg'),
    new Recipe ('A test recipe 2','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg'),
    new Recipe ('A test recipe 3','This is a simply test',
    'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg')
  ];

getRecipes() {
    return this.recipes.slice();
}

}