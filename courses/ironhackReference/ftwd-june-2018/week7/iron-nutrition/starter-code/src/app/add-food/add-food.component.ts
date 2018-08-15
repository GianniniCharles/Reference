import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  theNewFoodItem:any = {};


  addNewFood(){
    this.theService.serviceFoodList.unshift(this.theNewFoodItem);
    this.theNewFoodItem = {};
    // this.toggleForm();
  }

  constructor(public theService: FoodService) { }

  ngOnInit() {
  }

}
