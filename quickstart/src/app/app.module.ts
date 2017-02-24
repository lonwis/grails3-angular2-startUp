import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PonyRacerComponent }  from './components/ponyracer.component';
import { RacesComponent} from './components/races.component'
import { PoniesComponent} from './components/ponies.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,
    PonyRacerComponent ,RacesComponent, PoniesComponent],
  bootstrap:    [ AppComponent ,
    PonyRacerComponent,RacesComponent, PoniesComponent]
})
export class AppModule { }
