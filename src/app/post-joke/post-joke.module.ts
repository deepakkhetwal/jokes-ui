/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PostJokeComponent} from './post-joke.component';
import {PostJokeDataService} from './post-joke-data.service';

@NgModule({
    imports:[FormsModule, CommonModule],
    declarations: [
        PostJokeComponent
    ],
    providers: [PostJokeDataService]
})
export class PostJokeModule{}