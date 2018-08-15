import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recentChampionships:Array<any> = [
    {name: 'Golden State Warriors',
    year: 2018,
    img: 'https://i.pinimg.com/originals/53/1b/f3/531bf3c54422daf61bfa0b9725ef0410.jpg',
    bestPlayers: ['Steph Curry', 'Klay Thompson', "Draymond Green", "Kevin Durant"]
    },
    {name: 'Golden State Warriors',
    year: 2017,
    img: 'https://i.pinimg.com/originals/53/1b/f3/531bf3c54422daf61bfa0b9725ef0410.jpg',
    bestPlayers: ['Steph Curry', 'Klay Thompson', "Draymond Green", "Kevin Durant"]
    },
    {name: 'Cleveland Cavaliers',
    year: 2016,
    img: 'https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770',
    bestPlayers: ['Lebron James', 'Kyrie Irving', "Kevin Love", "JR Smith"]
    }
  ]

  
}
