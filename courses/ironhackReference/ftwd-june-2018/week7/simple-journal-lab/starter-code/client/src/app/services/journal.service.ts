import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class JournalService {

  constructor(private myHttp: Http) { }


  getEntries(){
    return this.myHttp.get('http://localhost:3000/api/journal-entries')
    .map((responseThingy)=> responseThingy.json())
  }


  addNewEntry(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/journal-entries',theWholeEntryObject)
    .map((res)=>res.json());
  }

  getOneEntry(theIdOfTheEntry){
    return this.myHttp.get('http://localhost:3000/api/journal-entries/'+theIdOfTheEntry)
    .map((responseThingy)=> responseThingy.json())

  }




}
