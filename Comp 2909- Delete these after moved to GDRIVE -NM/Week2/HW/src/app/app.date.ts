/**
 * Created by japjohal on 2017-10-14.
 */
/**
 * Created by japjohal on 2017-10-14.
 */
import { Component } from '@angular/core';

@Component({
    selector:'date',
    template:`<div class="date">{{today | date}}</div>`
})

export class date {
    today:number = Date.now();
}