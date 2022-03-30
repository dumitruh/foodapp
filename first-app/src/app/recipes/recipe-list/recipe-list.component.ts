import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component( {
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ]
} )
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  /* `constructor` is a function that is called when the component is created. */
  constructor ( private recipeService: RecipeService,                                     /* A way to make a variable or function private. */
                private router: Router,
                private route: ActivatedRoute ) {
  }

  ngOnInit() {
    /* This is subscribing to the recipeService.recipesChanged event. */
    this.subscription = this.recipeService.recipesChanged
      ./* Subscribing to the event. */
      subscribe((recipes: Recipe[])=>{
        this.recipes=recipes;
      })
    this.recipes = this.recipeService.getRecipes();
  }

/* This is a function that is called when the user clicks the "New Recipe" button. */
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  /* Unsubscribing from the event. */
  ngOnDestroy(): void {
      /* `this` is the `RecipeListComponent` class. */
      /* This is unsubscribing from the event. */
      this.subscription.unsubscribe;
  }
}
