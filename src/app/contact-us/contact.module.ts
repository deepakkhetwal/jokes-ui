/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {NgModule} from '@angular/core';

import {ContactComponent} from './contact.component';
import {ContactDataService} from './contact-data.service';

@NgModule({
    imports:[],
    declarations: [
        ContactComponent
    ],
    providers: [ContactDataService]
})
export class ContactModule{}