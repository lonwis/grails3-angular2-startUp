import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule }   from '@angular/forms';
import  { HttpModule }   from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent }  from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroSearchComponent }  from './components/hero-search.component';
import { HeroService }  from './services/hero.service';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent ,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ],
})


export class AppModule { }
