/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class PostJokeDataService{
    constructor(private http: HttpClient){}
    postJoke(body) {
        let url = environment.kidsLaughsApi + '/post-joke'; //'http://localhost:3001';
        return this.http
            .post(url, body);
    }
}
