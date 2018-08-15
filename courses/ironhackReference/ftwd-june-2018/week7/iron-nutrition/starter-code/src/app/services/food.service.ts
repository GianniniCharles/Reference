import { Injectable } from '@angular/core';
import foods from '../foods';


@Injectable()
export class FoodService {

  serviceFoodList:Array<any> = foods;



  constructor() { }

}
