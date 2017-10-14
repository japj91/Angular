import {Component} from "@angular/core";

export class CeluisToFarenhit{
    public celusis:number;

    convert(cel:number){
        cel*=9;
        cel/=5;
        cel+=32;
        this.celusis = cel;
        return this.celusis;
    }
}