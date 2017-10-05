import { Component, OnInit } from '@angular/core';
import { TransferState } from '../modules/transfer-state/transfer-state';


@Component({
  selector: 'main-app',
  template: `<nav><a routerLink="/jokes">Jokes</a> </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) { }

  ngOnInit() {
    // This is an example
    this.cache.set('message', 'Hello World');
  }
}
