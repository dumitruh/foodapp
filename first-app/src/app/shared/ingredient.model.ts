export class Ingredient {
    //declaration
    public name: string;
    public amount: number;

//content of the body/block
//shortcut example 'constructor( public name: string, public amount: number)'
constructor(name: string, amount: number){
    this.name=name;
    this.amount=amount;
}
}