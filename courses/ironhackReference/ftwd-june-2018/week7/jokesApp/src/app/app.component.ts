import { Component, OnInit } from '@angular/core';
import {JokeService} from './services/joke.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  joke: any;
  constructor(private jokes: JokeService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => {
        this.joke = joke
      });
  }


}
