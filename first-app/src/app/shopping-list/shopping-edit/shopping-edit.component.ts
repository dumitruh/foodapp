import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
/* Creating a new instance of the class. */
      @ViewChild('f') slForm: NgForm; /* A directive that is part of the Angular Forms API. It is a wrapper around the standard HTML form element. */
      private subscription: Subscription;
      editMode= false;
      editedItemIndex: number;
      editedItem: Ingredient; 

  constructor(private slService:ShoppingListService ) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number)=>{
          this.editedItemIndex = index;
          this.editMode=true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount  
          })
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
    
    onClear(){
      this.slForm.reset();
      this.editMode = false;
    }
    onDelete(){
      this.slService.deleteIngredient(this.editedItemIndex);
      this.onClear;
    }

  ngOnDestroy (){
    this.subscription.unsubscribe();
  }
}
