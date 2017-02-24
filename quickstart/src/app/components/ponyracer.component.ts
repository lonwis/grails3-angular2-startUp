import { Component } from '@angular/core';
import { RacesComponent } from './races.component'
import {RaceService} from '../services/race.service'
@Component({
  selector: 'ponyracer-cmp',
  template: `
    <h1>Pony {{name}}</h1>
    <races-cmp 
      (newRaceAvailable)="onNewRace()">loading races-cmp</races-cmp> 
  `,
})
export class PonyRacerComponent  {
  name = 'Racer';
  numberOfUsers: number = 146;
  user: any = {name: 'Cedric'};

  //constructor(private _raceService: RaceService){}
  constructor( ){}
  // list(){
  //   return this._raceService.list();
  // }
  onNewRace(){

  }
}


