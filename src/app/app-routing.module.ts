import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '' , redirectTo: '/recipes', pathMatch: 'full'
    },
    { 
        path: 'signin', component: SigninComponent 
    },
    {
        path: 'recipes', component: RecipesComponent, children: [
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipesEditComponent},
            {path: ':id', component: RecipesDetailComponent},
            {path: ':id/edit', component: RecipesEditComponent}  
        ], canActivate: [AuthGuard] 
    },
    {
        path: 'shoppinglist', component: ShoppingListComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}