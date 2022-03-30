export class Ingredient {
    //declaration
    /* A shortcut for declaring the properties of the class. */
    public name: string;
    public amount: number;

//content of the body/block
//shortcut example 'constructor( public name: string, public amount: number)'
constructor(name: string, amount: number){
    /* Assigning the name and amount properties of the class to the name and amount parameters. */
    this.name=name;
    this.amount=amount; 
}
}