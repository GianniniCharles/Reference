import { Component, OnInit } from '@angular/core';
import {CounterService} from '../services/counter.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']

})
export class SecondComponent implements OnInit {

  constructor(public myCounterService: CounterService) { }

  runIncrement(){
    this.myCounterService.increment();
  }



  ngOnInit() {
  }

}
