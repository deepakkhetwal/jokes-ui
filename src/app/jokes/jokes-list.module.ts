/**
 * Created by deepakkhetwal on 8/21/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesListComponent} from './jokes-list.component';
import {JokesListDataService} from './jokes-list-data.service';

@NgModule({
    imports:[CommonModule],
    declarations: [
        JokesListComponent
    ],
    providers: [JokesListDataService]
})
export class JokesListModule{}