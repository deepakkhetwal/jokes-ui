/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class JokesListDataService{
    constructor(private http: Http){}
    getJokesList(): Observable<any>{
        let url = environment.kidsLaughsApi + '/jokes';
        //console.log('url' + url);
        return this.http
            .get(url);

    }
}
