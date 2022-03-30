import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

/* This is the decorator that tells Angular that this is a component. */
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: [ './recipe-detail.component.css' ]
})
/* The RecipeDetailComponent class is a component that displays the details of a recipe */
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

  /**
   * The constructor function is a special function that is called when an instance of a class is created. * used to initialize the class. 
   * @param {RecipeService} recipeService - This is the RecipeService that we created in the previous recipe.
   * @param {Router} router - The router is an Angular service that allows you to programmatically navigate through an application.
   * @param {ActivatedRoute} route - ActivatedRoute
   */
  constructor ( private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute ) { }

 /**
  * The ngOnInit() method is a lifecycle hook that is called after the constructor of a component. 
  * used to initialize the component
  */
  ngOnInit() {
    this.route.params
    /* This is a way to subscribe to an Observable. 
    The Observable is the response from the router.navigate(['/recipes']);
    The function is the callback that is called when the Observable emits a value. */
    .subscribe(
      (params: Params) =>{
        this.id = +params ['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      });
  }

  /**
   * Add the ingredients of the current recipe to the shopping list
   */
  onAddToShoppingList() {
    this.recipeService.addIngShoppingList( this.recipe.ingredients );
  }

  /**
   * Navigate to the edit page for the recipe
   */
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
   * Delete a recipe from the database and navigate back to the recipe list
   */
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
