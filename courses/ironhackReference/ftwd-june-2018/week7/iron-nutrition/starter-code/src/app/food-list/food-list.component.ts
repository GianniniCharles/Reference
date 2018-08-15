import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(public myService: FoodService) { }

  theFoodList:Array<any>;
  theSearchTerm:string;

  formShowing:boolean = false;

  todaysFoods:Array<any> = [];



  addToMenu(thingToAdd){
    this.todaysFoods.unshift(thingToAdd);
  }


  toggleForm(){
    this.formShowing = !this.formShowing;
  }

  searchFoods(){
    this.theFoodList = this.myService.serviceFoodList.filter((oneFood)=>{
      return oneFood.name.toLowerCase().match(this.theSearchTerm.toLowerCase());
    });
  }



  ngOnInit() {
    this.theFoodList = this.myService.serviceFoodList;
  }

}
