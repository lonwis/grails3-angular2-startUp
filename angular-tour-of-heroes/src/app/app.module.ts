import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule }   from '@angular/forms';
import  { RouterModule }   from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent }  from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroService }  from './services/hero.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'heroes',
          component: HeroesComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        },
      ])
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
