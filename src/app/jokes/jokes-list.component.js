var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by deepakkhetwal on 8/21/17.
 */
import { Component } from '@angular/core';
import { JokesListDataService } from './jokes-list-data.service';
var JokesListComponent = (function () {
    function JokesListComponent(jokesListDataService) {
        this.jokesListDataService = jokesListDataService;
    }
    JokesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jokesListDataService.getJokesList()
            .subscribe(function (p) {
            _this.jokes = p;
        });
    };
    JokesListComponent = __decorate([
        Component({
            selector: 'jokes-list',
            templateUrl: './jokes-list.component.html',
            providers: [JokesListDataService]
        }),
        __metadata("design:paramtypes", [JokesListDataService])
    ], JokesListComponent);
    return JokesListComponent;
}());
export { JokesListComponent };
