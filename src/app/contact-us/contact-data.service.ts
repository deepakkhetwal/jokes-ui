/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactDataService{
    constructor(private http: HttpClient){}
    getContact() {
        let url = environment.kidsLaughsApi + '/get-contact'; //'http://localhost:3001';
        return this.http
            .get(url);
    }

}