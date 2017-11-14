/**
 * Created by deepakkhetwal on 8/21/17.
 */
import { Component, OnInit } from '@angular/core';
import {JokesListDataService} from './jokes-list-data.service';


@Component({
    selector: 'jokes-list',
    templateUrl: './jokes-list.component.html',
    providers: [JokesListDataService]
})

export class JokesListComponent implements OnInit{
    jokes: any;
    liked: Boolean[] = [];
    constructor(
        private jokesListDataService: JokesListDataService
    ){}
    ngOnInit(): void{
        this.jokesListDataService.getJokesList()
            .subscribe(p => {
                this.jokes = p;
                for(let i=0; i< this.jokes.length; i++){
                    this.liked[i] = false;
                }
            });
    }
    onPostLike(index){
        this.jokes[index].likes_count = this.jokes[index].likes_count +1;
        this.liked[index] = true;
        const _id = this.jokes[index]._id;
        this.jokesListDataService.postLike({_id: _id})
            .subscribe();
    }
}
