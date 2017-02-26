import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
  title = 'List of Heroes';
  selectedHero: Hero;
  heroes : Hero[];
  constructor(
    private heroService: HeroService,
    private router: Router
  ){};
  setHeroes():void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes );
    // this.heroService.getHeroesSlowly()
    //  .then(heroes => this.heroes = heroes );
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  gotoDetail():void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  ngOnInit(): void {
    this.setHeroes();
  }
}
