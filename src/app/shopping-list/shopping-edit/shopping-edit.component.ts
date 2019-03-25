import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef : ElementRef
  @ViewChild('amountInput') amountInputRef : ElementRef
  

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    console.log('onAddIngredient')
    const newIngred = new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value)
    // this.ingredientAdded.emit(newIngred)
    this.shoppingListService.addIngredient(newIngred)
  }

}
