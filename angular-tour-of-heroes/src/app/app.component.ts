import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
      <a routerLink="/detail/11">detail11</a>
    </nav>
    <router-outlet></router-outlet> 
    `,
})
export class AppComponent   {
  title = 'Tour of Heroes'
}
