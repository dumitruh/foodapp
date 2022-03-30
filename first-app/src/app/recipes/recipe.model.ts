import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    /* Creating a property called `name` and assigning it a value of `string`. */
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        /* This is assigning the name property of the Recipe class to the name parameter of the
        constructor. */
        this.name = name;
        this.imagePath = imagePath;
        this.description = desc;
        this.ingredients = ingredients;
    }
}