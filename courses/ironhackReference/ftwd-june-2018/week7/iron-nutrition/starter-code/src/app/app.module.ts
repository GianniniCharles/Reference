import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { StringifyPipe } from './stringify.pipe';
import { FoodService } from './services/food.service';
import { AddFoodComponent } from './add-food/add-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    StringifyPipe,
    AddFoodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
