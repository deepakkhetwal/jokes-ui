import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {JokesListModule} from './jokes/jokes-list.module';
import {JokesListComponent} from './jokes/jokes-list.component';
import {PostJokeComponent} from './post-joke/post-joke.component';
import {PostJokeModule} from './post-joke/post-joke.module';
import {ContactModule} from './contact-us/contact.module';
import {ContactComponent} from './contact-us/contact.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JokesListModule,
    PostJokeModule,
    ContactModule,
    BrowserModule.withServerTransition({
          appId: 'my-app-id'
    }),
    RouterModule.forRoot([
      { path: '', component: JokesListComponent, pathMatch: 'full'},
      {path: 'jokes', component: JokesListComponent},
      {path: 'post-joke', component: PostJokeComponent},
      {path: 'get-contact', component: ContactComponent},
    ])
  ],
  declarations: [ AppComponent],
  exports: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}
