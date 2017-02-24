import { Component } from '@angular/core';

@Component({
  selector: 'ponies-cmp',
  template: `
     <div><h1>Ponies</h1>
     <button (click)="refresPonies()">Refresh</button>
      <ul>
      <template 
            ngFor 
            let-pony [ngForOf]="ponies" 
            let-i="index"  
            let-isEven="even"
      >
            <li [style.color] =" isEven ? 'green' : 'blue'"
                >{{i | percent }}-{{pony.name |lowercase}}</li>
        </template>
      </ul>
     </div>
    `,
})
export class PoniesComponent  {
  ponies: Array<any> = [
        {name:'Rainbow Dash'},
        {name: 'Pinkie Pie'}
        ];
  refreshPonies() {
    this.ponies = [
            { name: 'Fluttershy'},
            {name: 'Rarity'}
            ];
  }
  cache:String = `
      <button onClick="refresPonies()">Refresh</button>
      <ul>  
        <template ngFor let-pony [ngForOf]="ponies" let-i="index" >
            <li [style.color] =" isEven ? 'green' : 'black'"
                >{{i}}-{{pony.name}}</li>
        </template>
      </ul>
    `

}


