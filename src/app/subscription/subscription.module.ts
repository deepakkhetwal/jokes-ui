/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SubscriptionComponent} from './subscription.component';
import {SubscriptionDataService} from './subscription-data.service';

@NgModule({
    imports:[FormsModule, CommonModule],
    declarations: [
        SubscriptionComponent
    ],
    providers: [SubscriptionDataService]
})
export class SubscriptionModule{}