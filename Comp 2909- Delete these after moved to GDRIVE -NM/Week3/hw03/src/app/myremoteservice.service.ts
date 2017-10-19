import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyremoteserviceService {

  public site:string;
  constructor(private http: Http) {
    this.site = "http://ssdsandbox.com/angular2/"
  }

  getFahrenheit():Observable<string[]>{

    let content = new URLSearchParams();
    content.set("f",'32');
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({
      search:content
    })
    let dataUrl = this.site+'api/Celsius';
    return this.http.get(dataUrl,options)
      .map(this.extractData)
      .catch(this.handleError);


  }

  private extractData(res: Response) {
    let body = res.json();
    return JSON.parse(body) || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
