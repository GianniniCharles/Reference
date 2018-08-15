import { Component, OnInit } from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']

})
export class FirstComponent implements OnInit {

  constructor(public myService: CounterService) { }


  showMeTheCount(){
    this.myService.increment();
  }

  ngOnInit() {
  }

}
