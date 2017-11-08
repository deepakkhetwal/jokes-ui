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
import { PostJokeDataService } from './post-joke-data.service';
import { PostJoke } from './post-joke.model';
var PostJokeComponent = (function () {
    function PostJokeComponent(postJokeDataService) {
        this.postJokeDataService = postJokeDataService;
        this.model = new PostJoke('', '');
        this.submitted = undefined;
        this.postSuccess = undefined;
    }
    PostJokeComponent.prototype.onPostJoke = function () {
        var _this = this;
        this.submitted = false;
        this.postJokeDataService.postJoke(this.model)
            .subscribe(function (p) {
            _this.submitted = true;
            if (p.success) {
                _this.postSuccess = true;
            }
            else {
                _this.postSuccess = false;
            }
        });
    };
    PostJokeComponent = __decorate([
        Component({
            selector: 'post-joke',
            templateUrl: './post-joke.component.html',
            providers: [PostJokeDataService]
        }),
        __metadata("design:paramtypes", [PostJokeDataService])
    ], PostJokeComponent);
    return PostJokeComponent;
}());
export { PostJokeComponent };
