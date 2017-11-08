/**
 * Created by deepakkhetwal on 8/21/17.
 */
import { Component } from '@angular/core';
import {PostJokeDataService} from './post-joke-data.service';
import {PostJoke} from './post-joke.model';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'post-joke',
    templateUrl: './post-joke.component.html',
    providers: [PostJokeDataService]
})

export class PostJokeComponent {
    jokes: any;
    model = new PostJoke('','');
    submitted: any = undefined;
    postSuccess: any = undefined;
    constructor(
        private postJokeDataService: PostJokeDataService
    ){}

    onPostJoke(){
        this.submitted = false;
        this.postJokeDataService.postJoke(this.model)
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
