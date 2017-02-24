import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class RaceService  {
  constructor (private _http: Http){ }
  list(){
    //this._http.get('http://localhost/races').map(res =>res.json()))
    return Observable.of([{name: 'London'}])
  }
}
