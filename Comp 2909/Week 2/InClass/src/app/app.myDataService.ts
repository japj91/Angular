import { Component } from '@angular/core';

// This is the service.
export class MyDataService {
    names: Array<any>; // Class level array
    myName: string;
    // Frist thing that runs is constructor

    constructor() {
        // We are referencing a model at the class level
        this.names = ['John', 'Mary', 'Joan'];
        this.myName = "jap";
    }
    // this is a function notice how it doesn’t tell u what its returning. It can also return different types of data

    getNames() {
        return this.names;
    }

    getMyName(){
        return this.myName;
    }
}

