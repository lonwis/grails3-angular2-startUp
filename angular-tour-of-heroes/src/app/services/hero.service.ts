import { Injectable } from '@angular/core';
import {  HEROES} from '../components/mock-heroes';

import { Hero } from '../components/hero';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES
  }
}
