/**
 * Created by deepakkhetwal on 8/21/17.
 */
import { Component } from '@angular/core';
import {SubscriptionDataService} from './subscription-data.service';
import {PostSubscription} from './subscription.model';


@Component({
    selector: 'subscription',
    templateUrl: './subscription.component.html',
    providers: [SubscriptionDataService]
})

export class SubscriptionComponent {
    model = new PostSubscription('');
    submitted: any = undefined;
    postSuccess: any = undefined;
    constructor(
        private subscriptionDataService: SubscriptionDataService
    ){}

    onPostSubscription(){
        this.submitted = false;
        this.subscriptionDataService.postSubscription(this.model)
            .subscribe((p : any) => {
                this.submitted= true
                if(p.success){
                    this.postSuccess = true;
                }else{
                    this.postSuccess = false;
                }
            });
    }
}
