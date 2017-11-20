/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class JokesListDataService{
    constructor(private http: HttpClient){}
    getJokesList() {
        let url = environment.kidsLaughsApi; //'http://localhost:3001';
        return this.http
            .get(url);
    }
    postLike(body){
        let url = environment.kidsLaughsApi + '/inc-likes-cnt';
        return this.http
            .post(url, body);
    }
}
