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

    constructor(
        private jokesListDataService: JokesListDataService
    ){}
    ngOnInit(): void{
        this.jokesListDataService.getJokesList()
            .subscribe(p => {
                let obj = JSON.parse(p);
                this.jokes = obj._body['jokes'];
                console.log('jokes' + this.jokes);
            });


    }
}
