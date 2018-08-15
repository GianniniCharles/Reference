import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  alternate:string = 'really great photo of a gentewolfpersonhuman'
  title:string = 'Uplifting News on Upper West Side'
  image:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGr9dryqG09XzgH9ynkyt-0ZHiIksBR3meAQ2ISCFmP9YiS9R';
  description:string = `The above pictured gentleman saved the lives of many today
  with his heroic actions.  The town is a safer palce because of it.
  This is a great historic moment for the city of rambleton`



  constructor() { }

  ngOnInit() {
  }

}
