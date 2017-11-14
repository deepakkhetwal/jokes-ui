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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var JokesListDataService = (function () {
    function JokesListDataService(http) {
        this.http = http;
    }
    JokesListDataService.prototype.getJokesList = function () {
        var url = environment.kidsLaughsApi; //'http://localhost:3001';
        return this.http
            .get(url);
    };
    JokesListDataService.prototype.postLike = function (body) {
        var url = environment.kidsLaughsApi + '/inc-likes-cnt';
        return this.http
            .post(url, body);
    };
    JokesListDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], JokesListDataService);
    return JokesListDataService;
}());
export { JokesListDataService };
