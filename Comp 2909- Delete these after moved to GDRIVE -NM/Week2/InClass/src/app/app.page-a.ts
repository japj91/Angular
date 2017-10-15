import { Component } from '@angular/core';
@Component({
    template: `This is page A.<br>This content was set in page-b: {{someItem}}
                <br>
                <br>
                content from page b {{someItem2}}`
})
export class PageAComponent {
    someItem: string;
    someItem2: string;

    constructor() {
        if (sessionStorage.getItem("autosave")) {
            this.someItem = sessionStorage.getItem("autosave");
        }
        if(sessionStorage.getItem("value")){
        this.someItem2 = sessionStorage.getItem("value")
        }
    }
}