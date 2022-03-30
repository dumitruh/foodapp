import { Component, OnInit, Input } from '@angular/core'; //first import input 
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
/* This is a decorator. It is a way to add metadata to our class. */
  @Input() recipe: Recipe; /*decorator @input bind from outside, use it in child component*/
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }
}
