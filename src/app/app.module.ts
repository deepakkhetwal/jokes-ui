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
import {SubscriptionModule} from './subscription/subscription.module';
import {SubscriptionComponent} from './subscription/subscription.component';
import { BrowserModule } from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JokesListModule,
    PostJokeModule,
    ContactModule,
    SubscriptionModule,
    BrowserModule.withServerTransition({
          appId: 'my-app-id'
    }),
    TransferHttpCacheModule,
    RouterModule.forRoot([
      { path: '', component: JokesListComponent, pathMatch: 'full'},
      {path: 'jokes', component: JokesListComponent},
      {path: 'post-joke', component: PostJokeComponent},
      {path: 'get-contact', component: ContactComponent},
      {path: 'subscribe', component: SubscriptionComponent}
    ])
  ],
  declarations: [ AppComponent],
  exports: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}
