import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { envConfig } from '../config/config';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  configData: any;
  constructor(
    private _router: Router, private _http: Http) {
    this.configData = envConfig;
  }
  // get user details by passing userid 
  getUserDetail(userid: any) {
    let url = this.configData.gitApiUrl + 'users/' + userid;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }

  getUserRepos(userid: any) {
    let url = this.configData.gitApiUrl + 'users/' + userid + '/repos';
    return this._http.get(url)
      .map((res: Response) => res.json());
  }
}
