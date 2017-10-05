var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JokesListModule } from './jokes/jokes-list.module';
import { JokesListComponent } from './jokes/jokes-list.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpModule,
                JokesListModule,
                RouterModule.forRoot([
                    { path: '', component: JokesListComponent, pathMatch: 'full' },
                    { path: 'jokes', component: JokesListComponent }
                ])
            ],
            declarations: [AppComponent],
            exports: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
