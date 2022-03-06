import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

//'Subject' is a special type of Observable that allows values to be multicasted to many Observer
export class ShoppingListService  {
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing = new Subject<number>(); 

    private ingredients: Ingredient[] = [
        new Ingredient ('Apples' ,5),
        new Ingredient ('Tomatoes', 10)
      ];

      getIngredients(){
       return this.ingredients.slice();
      }
      getIngredient(index:number){
        return this.ingredients[index];
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient)  
          this.ingredientsChanged.next(this.ingredients.slice());
        }
        adIngredients(ingredients: Ingredient[]){
          // for (let ingredient of ingredients){
          //   this.addIngredient(ingredient)
          // }
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());

        }
        updateIngredient(index: number, newIngredinet: Ingredient){
          this.ingredients[index]=newIngredinet;
          this.ingredientsChanged.next(this.ingredients.slice());
        }
        deleteIngredient(index: number){
          this.ingredients.splice(index, 1);
          this.ingredientsChanged.next(this.ingredients.slice());
        }
}