webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/jokes\">KidsLaughs.com Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/post-joke\">Post a Joke</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/subscribe\">Subscribe</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/get-contact\">About us</a>\n  </li>\n\n</ul>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jokes_jokes_list_module__ = __webpack_require__("../../../../../src/app/jokes/jokes-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_list_component__ = __webpack_require__("../../../../../src/app/jokes/jokes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_joke_post_joke_component__ = __webpack_require__("../../../../../src/app/post-joke/post-joke.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_joke_post_joke_module__ = __webpack_require__("../../../../../src/app/post-joke/post-joke.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_module__ = __webpack_require__("../../../../../src/app/contact-us/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_component__ = __webpack_require__("../../../../../src/app/contact-us/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subscription_subscription_module__ = __webpack_require__("../../../../../src/app/subscription/subscription.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscription_subscription_component__ = __webpack_require__("../../../../../src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nguniversal_common__ = __webpack_require__("../../../../@nguniversal/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nguniversal_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__nguniversal_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_5__jokes_jokes_list_module__["a" /* JokesListModule */],
                __WEBPACK_IMPORTED_MODULE_8__post_joke_post_joke_module__["a" /* PostJokeModule */],
                __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_11__subscription_subscription_module__["a" /* SubscriptionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["BrowserModule"].withServerTransition({
                    appId: 'my-app-id'
                }),
                __WEBPACK_IMPORTED_MODULE_14__nguniversal_common__["TransferHttpCacheModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_list_component__["a" /* JokesListComponent */], pathMatch: 'full' },
                    { path: 'jokes', component: __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_list_component__["a" /* JokesListComponent */] },
                    { path: 'post-joke', component: __WEBPACK_IMPORTED_MODULE_7__post_joke_post_joke_component__["a" /* PostJokeComponent */] },
                    { path: 'get-contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_component__["a" /* ContactComponent */] },
                    { path: 'subscribe', component: __WEBPACK_IMPORTED_MODULE_12__subscription_subscription_component__["a" /* SubscriptionComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us/contact-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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



var ContactDataService = (function () {
    function ContactDataService(http) {
        this.http = http;
    }
    ContactDataService.prototype.getContact = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kidsLaughsApi + '/get-contact'; //'http://localhost:3001';
        return this.http
            .get(url);
    };
    ContactDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], ContactDataService);
    return ContactDataService;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">About US</h4>\n    <p class=\"card-text\">\n          Email Id: {{contact.email}}\n    </p>\n    <a href=\"http://khetwalenterprises.com\" class=\"btn btn-primary\">khetwalenterprises.com</a>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_data_service__ = __webpack_require__("../../../../../src/app/contact-us/contact-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(contactDataService) {
        this.contactDataService = contactDataService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactDataService.getContact()
            .subscribe(function (p) {
            _this.contact = p[0];
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'contact',
            template: __webpack_require__("../../../../../src/app/contact-us/contact.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__contact_data_service__["a" /* ContactDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__contact_data_service__["a" /* ContactDataService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_component__ = __webpack_require__("../../../../../src/app/contact-us/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_data_service__ = __webpack_require__("../../../../../src/app/contact-us/contact-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by deepakkhetwal on 8/21/17.
 */



var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__contact_component__["a" /* ContactComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__contact_data_service__["a" /* ContactDataService */]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "../../../../../src/app/jokes/jokes-list-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesListDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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



var JokesListDataService = (function () {
    function JokesListDataService(http) {
        this.http = http;
    }
    JokesListDataService.prototype.getJokesList = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kidsLaughsApi; //'http://localhost:3001';
        return this.http
            .get(url);
    };
    JokesListDataService.prototype.postLike = function (body) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kidsLaughsApi + '/inc-likes-cnt';
        return this.http
            .post(url, body);
    };
    JokesListDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], JokesListDataService);
    return JokesListDataService;
}());



/***/ }),

/***/ "../../../../../src/app/jokes/jokes-list.component.html":
/***/ (function(module, exports) {

module.exports = " <ul class=\"list-group\" *ngFor=\"let joke of jokes; let i=index\">\n   <li class=\"list-group-item\">\n     {{joke.description}}\n         <br>\n         <button *ngIf=\"liked[i]===false\" type=\"button\" class=\"btn btn-light\" aria-label=\"Left Align\" (click)=\"onPostLike(i)\">\n         <i class=\"fa fa-bell-o fa-lg\"   aria-hidden=\"true\"></i> Like\n         </button>\n       <button *ngIf=\"liked[i]===true\" type=\"button\" class=\"btn btn-light\" aria-label=\"Left Align\">\n         <i class=\"fa fa-bell fa-lg\"   aria-hidden=\"true\"></i> Like\n       </button>\n     {{joke.likes_count}} Likes\n   </li>\n </ul>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/jokes/jokes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jokes_list_data_service__ = __webpack_require__("../../../../../src/app/jokes/jokes-list-data.service.ts");
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


var JokesListComponent = (function () {
    function JokesListComponent(jokesListDataService) {
        this.jokesListDataService = jokesListDataService;
        this.liked = [];
    }
    JokesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jokesListDataService.getJokesList()
            .subscribe(function (p) {
            _this.jokes = p;
            for (var i = 0; i < _this.jokes.length; i++) {
                _this.liked[i] = false;
            }
        });
    };
    JokesListComponent.prototype.onPostLike = function (index) {
        this.jokes[index].likes_count = this.jokes[index].likes_count + 1;
        this.liked[index] = true;
        var _id = this.jokes[index]._id;
        this.jokesListDataService.postLike({ _id: _id })
            .subscribe();
    };
    JokesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jokes-list',
            template: __webpack_require__("../../../../../src/app/jokes/jokes-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__jokes_list_data_service__["a" /* JokesListDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__jokes_list_data_service__["a" /* JokesListDataService */]])
    ], JokesListComponent);
    return JokesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jokes/jokes-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jokes_list_component__ = __webpack_require__("../../../../../src/app/jokes/jokes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jokes_list_data_service__ = __webpack_require__("../../../../../src/app/jokes/jokes-list-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by deepakkhetwal on 8/21/17.
 */




var JokesListModule = (function () {
    function JokesListModule() {
    }
    JokesListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jokes_list_component__["a" /* JokesListComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__jokes_list_data_service__["a" /* JokesListDataService */]]
        })
    ], JokesListModule);
    return JokesListModule;
}());



/***/ }),

/***/ "../../../../../src/app/post-joke/post-joke-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJokeDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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



var PostJokeDataService = (function () {
    function PostJokeDataService(http) {
        this.http = http;
    }
    PostJokeDataService.prototype.postJoke = function (body) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kidsLaughsApi + '/post-joke'; //'http://localhost:3001';
        return this.http
            .post(url, body);
    };
    PostJokeDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], PostJokeDataService);
    return PostJokeDataService;
}());



/***/ }),

/***/ "../../../../../src/app/post-joke/post-joke.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Please post a Joke here for kids\n  </div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <form  #postJokeForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"emailId\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailId\" #emailId=\"ngModel\"  [(ngModel)]=\"model.user_email\" name=\"emailId\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          <div *ngIf=\"emailId.invalid && (emailId.dirty || emailId.touched)\"\n               class=\"alert alert-danger\">\n            Email is required\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Enter a Joke</label>\n          <textarea rows=\"10\" cols=\"5\" class=\"form-control\" id=\"description\" #description=\"ngModel\" [(ngModel)]=\"model.description\" name=\"description\" required></textarea>\n          <div *ngIf=\"description.invalid && (description.dirty || description.touched)\"\n               class=\"alert alert-danger\">\n            Joke text is required\n          </div>\n        </div>\n        <div *ngIf=\"postSuccess === true\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n          Thank you for posting your Joke.\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div *ngIf=\"postSuccess=== false\" class=\"alert alert-error alert-dismissible fade show\" role=\"alert\">\n          Oops some error occurred. please try again!.\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"form-group\">\n          Please note: Your joke will be posted after being reviewed\n        </div>\n        <button (click)=\"onPostJoke()\" type=\"button\" [disabled]='postJokeForm.invalid && submitted=== false' class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post-joke/post-joke.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJokeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_joke_data_service__ = __webpack_require__("../../../../../src/app/post-joke/post-joke-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_joke_model__ = __webpack_require__("../../../../../src/app/post-joke/post-joke.model.ts");
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



var PostJokeComponent = (function () {
    function PostJokeComponent(postJokeDataService) {
        this.postJokeDataService = postJokeDataService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__post_joke_model__["a" /* PostJoke */]('', '');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-joke',
            template: __webpack_require__("../../../../../src/app/post-joke/post-joke.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__post_joke_data_service__["a" /* PostJokeDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_joke_data_service__["a" /* PostJokeDataService */]])
    ], PostJokeComponent);
    return PostJokeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/post-joke/post-joke.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJoke; });
var PostJoke = (function () {
    function PostJoke(description, user_email) {
        this.description = description;
        this.user_email = user_email;
    }
    return PostJoke;
}());



/***/ }),

/***/ "../../../../../src/app/post-joke/post-joke.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJokeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_joke_component__ = __webpack_require__("../../../../../src/app/post-joke/post-joke.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_joke_data_service__ = __webpack_require__("../../../../../src/app/post-joke/post-joke-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by deepakkhetwal on 8/21/17.
 */





var PostJokeModule = (function () {
    function PostJokeModule() {
    }
    PostJokeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__post_joke_component__["a" /* PostJokeComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__post_joke_data_service__["a" /* PostJokeDataService */]]
        })
    ], PostJokeModule);
    return PostJokeModule;
}());



/***/ }),

/***/ "../../../../../src/app/subscription/subscription-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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



var SubscriptionDataService = (function () {
    function SubscriptionDataService(http) {
        this.http = http;
    }
    SubscriptionDataService.prototype.postSubscription = function (body) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].kidsLaughsApi + '/post-subscription'; //'http://localhost:3001';
        return this.http
            .post(url, body);
    };
    SubscriptionDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], SubscriptionDataService);
    return SubscriptionDataService;
}());



/***/ }),

/***/ "../../../../../src/app/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Subscribe here to read new Jokes, when they arrive\n  </div>\n  <div class=\"row\">&nbsp;</div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <form  #subscriptionForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"emailId\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailId\" #emailId=\"ngModel\"  [(ngModel)]=\"model.user_email\" name=\"emailId\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          <div *ngIf=\"emailId.invalid && (emailId.dirty || emailId.touched)\"\n               class=\"alert alert-danger\">\n            Email is required\n          </div>\n        </div>\n\n        <div *ngIf=\"postSuccess === true\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n          Thank you for Subscribing.\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div *ngIf=\"postSuccess=== false\" class=\"alert alert-error alert-dismissible fade show\" role=\"alert\">\n          Oops some error occurred. please try again!.\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <button (click)=\"onPostSubscription()\" type=\"button\" [disabled]='subscriptionForm.invalid && submitted=== false' class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_data_service__ = __webpack_require__("../../../../../src/app/subscription/subscription-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_model__ = __webpack_require__("../../../../../src/app/subscription/subscription.model.ts");
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



var SubscriptionComponent = (function () {
    function SubscriptionComponent(subscriptionDataService) {
        this.subscriptionDataService = subscriptionDataService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__subscription_model__["a" /* PostSubscription */]('');
        this.submitted = undefined;
        this.postSuccess = undefined;
    }
    SubscriptionComponent.prototype.onPostSubscription = function () {
        var _this = this;
        this.submitted = false;
        this.subscriptionDataService.postSubscription(this.model)
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
    SubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'subscription',
            template: __webpack_require__("../../../../../src/app/subscription/subscription.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__subscription_data_service__["a" /* SubscriptionDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__subscription_data_service__["a" /* SubscriptionDataService */]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subscription/subscription.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostSubscription; });
var PostSubscription = (function () {
    function PostSubscription(user_email) {
        this.user_email = user_email;
    }
    return PostSubscription;
}());



/***/ }),

/***/ "../../../../../src/app/subscription/subscription.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_component__ = __webpack_require__("../../../../../src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription_data_service__ = __webpack_require__("../../../../../src/app/subscription/subscription-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by deepakkhetwal on 8/21/17.
 */





var SubscriptionModule = (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__subscription_component__["a" /* SubscriptionComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__subscription_data_service__["a" /* SubscriptionDataService */]]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.dev.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    kidsLaughsApi: 'https://kids-jokes-api.herokuapp.com',
    production: false
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_dev__ = __webpack_require__("../../../../../src/environments/environment.dev.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment_dev__["a"]; });



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map