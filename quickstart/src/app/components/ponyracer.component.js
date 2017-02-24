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
var PonyRacerComponent = (function () {
    //constructor(private _raceService: RaceService){}
    function PonyRacerComponent() {
        this.name = 'Racer';
        this.numberOfUsers = 146;
        this.user = { name: 'Cedric' };
    }
    // list(){
    //   return this._raceService.list();
    // }
    PonyRacerComponent.prototype.onNewRace = function () {
    };
    PonyRacerComponent = __decorate([
        core_1.Component({
            selector: 'ponyracer-cmp',
            template: "\n    <h1>Pony {{name}}</h1>\n    <races-cmp \n      (newRaceAvailable)=\"onNewRace()\">loading races-cmp</races-cmp> \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], PonyRacerComponent);
    return PonyRacerComponent;
}());
exports.PonyRacerComponent = PonyRacerComponent;
//# sourceMappingURL=ponyracer.component.js.map