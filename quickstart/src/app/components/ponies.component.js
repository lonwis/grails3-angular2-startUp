"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PoniesComponent = (function () {
    function PoniesComponent() {
        this.ponies = [
            { name: 'Rainbow Dash' },
            { name: 'Pinkie Pie' }
        ];
        this.cache = "\n      <button onClick=\"refresPonies()\">Refresh</button>\n      <ul>  \n        <template ngFor let-pony [ngForOf]=\"ponies\" let-i=\"index\" >\n            <li [style.color] =\" isEven ? 'green' : 'black'\"\n                >{{i}}-{{pony.name}}</li>\n        </template>\n      </ul>\n    ";
    }
    PoniesComponent.prototype.refreshPonies = function () {
        this.ponies = [
            { name: 'Fluttershy' },
            { name: 'Rarity' }
        ];
    };
    PoniesComponent = __decorate([
        core_1.Component({
            selector: 'ponies-cmp',
            template: "\n     <div><h1>Ponies</h1>\n     <button (click)=\"refresPonies()\">Refresh</button>\n      <ul>\n      <template \n            ngFor \n            let-pony [ngForOf]=\"ponies\" \n            let-i=\"index\"  \n            let-isEven=\"even\"\n      >\n            <li [style.color] =\" isEven ? 'green' : 'blue'\"\n                >{{i | percent }}-{{pony.name |lowercase}}</li>\n        </template>\n      </ul>\n     </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], PoniesComponent);
    return PoniesComponent;
}());
exports.PoniesComponent = PoniesComponent;
//# sourceMappingURL=ponies.component.js.map