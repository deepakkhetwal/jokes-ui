import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {JokesListModule} from './jokes/jokes-list.module';
import {JokesListComponent} from './jokes/jokes-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JokesListModule,
    RouterModule.forRoot([
      { path: '', component: JokesListComponent, pathMatch: 'full'},
      {path: 'jokes', component: JokesListComponent}
    ])
  ],
  declarations: [ AppComponent],
  exports: [ AppComponent ]
})
export class AppModule {}
