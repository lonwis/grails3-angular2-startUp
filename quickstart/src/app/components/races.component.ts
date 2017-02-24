import { Component } from '@angular/core';

@Component({
  selector: 'races-cmp',
  template: `
     
     <div *ngIf="races.length > 0"><h2>Races  </h2>
      <ul>  
        <template ngFor let-race [ngForOf]="races" let-i="index" >
            <li>{{i}}-{{race.name | uppercase }}</li>
        </template>
      </ul>
     </div>
    `,
})
export class RacesComponent  {
  races: Array<any> = [{name:'London'}, {name: 'Lyon'}];

}
