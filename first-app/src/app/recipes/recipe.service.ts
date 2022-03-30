import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


/* A decorator that tells TypeScript that this class is a service. */
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>(); 

    recipeSelected = new EventEmitter<Recipe>();/* Creating an event emitter that will emit an event of type Recipe. */
    
    //recipe.model combined Recipe constructor(name, desc, img)
    // private recipes: Recipe[] = [new Recipe(
    //         'Skillet Lemon Chicken',
    //         'This healthy weeknight dish uses lemon slices and fresh herbs',
    //         'https://106fyz3cd4vi2lc2uq1tlyl4-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/skillet-lemon-chicken-with-fresh-herbs-and-couscous-CMS-1440x700-1-600x600.jpg',
    //         [
    //             new Ingredient( 'chicken thighs, bone in, skin on', 2 ),
    //             new Ingredient( 'lemons', 2 ),
    //             new Ingredient( 'olive oil', 1/2)
    //         ] ),
    //     new Recipe(
    //         'Chicken Shawarma Quinoa',
    //         'These loaded bowls are perfect for prepping ahead of time and can be customized easily to suit everyone’s preferences',
    //         'https://106fyz3cd4vi2lc2uq1tlyl4-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/Chicken-Shawarma-Quinoa-Bowl-037-1180x590-web-600x590.jpg',
    //         [
    //             new Ingredient( 'cloves garlic, minced, divided', 4 ),
    //             new Ingredient( 'ground coriander', 2 ),
    //             new Ingredient( 'large chicken breasts', 2 )
    //         ]),

    //     new Recipe(
    //         'Maple Mustard Chicken Sheet',
    //         'This savoury sheet pan dinner has a hint of sweetness that’s balanced perfectly with earthy root vegetables and Brussels sprouts.',
    //         'https://106fyz3cd4vi2lc2uq1tlyl4-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/Maple-Mustard-Chicken-Sheet-Pan-Dinner-020-1180x580-1-600x600.jpg',
    //         [
    //             new Ingredient( 'bone-in, skin-on chicken thighs', 8 ),
    //             new Ingredient( 'salt, divided', 1 ),
    //             new Ingredient( 'red onion, chopped', 1 )
    //         ]) 
    //     ];

    private recipes: Recipe[]= [];

    constructor ( private slService: ShoppingListService ) {  }

        setRecipes(recipes: Recipe[]){
            this.recipes=recipes;
            this.recipesChanged.next(this.recipes.slice());
        }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngShoppingList( ingredients: Ingredient[] ) {
        this.slService.adIngredients( ingredients );
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}