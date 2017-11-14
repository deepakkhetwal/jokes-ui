
import {ContactDataService} from './contact-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    providers: [ContactDataService]
})

export class ContactComponent implements OnInit{
    contact: any;

    constructor(
        private contactDataService: ContactDataService
    ){}
    ngOnInit(): void{
        this.contactDataService.getContact()
            .subscribe(p => {
                this.contact = p[0];

            });
    }

}