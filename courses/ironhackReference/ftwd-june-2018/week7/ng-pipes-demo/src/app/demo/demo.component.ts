import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  names:Array<any>=['jon', 'sarah', 'raymundo', 'marta'];

  blah:string = "look it looks like im yelling"

  theDateVar:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
