import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent }  from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroService }  from './services/hero.service';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
  ],
  declarations: [
    AppComponent ,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ],
})


export class AppModule { }
