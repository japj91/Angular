import { Injectable }     from '@angular/core';
import { Component }      from '@angular/core';
import {URLSearchParams, QueryEncoder} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class MyremoteserviceService {

  public site:string;
  public celsuis:string;

  constructor(private http: Http) {
    this.site = "http://ssdsandbox.com/angular2/"
  }
  getCelsius(temp:string): Observable<string[]>{
    let content = new URLSearchParams();
    content.set('f',temp);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // what is this
    let options = new RequestOptions({ search: content}); // what is options?
    let dataUrl = this.site+'api/Celsius';

    return this.http.get(dataUrl,options)
      .map(this.extractData) // why no paramters or ()
      .catch(this.handleError);

  }

  getFahrenheit(temp:string): Observable<string[]> {
    let content = new URLSearchParams();
    content.set('c',  temp);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({
      search: content
    });

    let dataUrl = this.site + 'api/Fahrenheit';
    return this.http.get(dataUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postName(_feedback: Object): Observable<Comment[]> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let url     = this.site + 'api/Feedback';

    let params: URLSearchParams = new URLSearchParams();

    let content = new URLSearchParams();
    content.set('Email',  _feedback["Email"]);
    content.set('Message', _feedback["Message"]);

    return this.http.post(url, content.toString(), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return JSON.parse(body);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
