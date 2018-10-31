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
    let url = `${this.configData.gitApiUrl}users/${userid}`;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }
  // get user public repos by passing userid 
  getUserRepos(userid: any) {
    let url = `${this.configData.gitApiUrl}users/${userid}/repos`;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }
  // get branches of repo by passing userid & repo name
  getUserBranches(userid: any, repoName: any) {
    let url = `${this.configData.gitApiUrl}repos/${userid}/${repoName}/branches`;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }
  // get commits into the branch by passing userid, repo name & branch name
  getUserCommits(userid: any, repoName: any, branchName: any) {
    let url = `${this.configData.gitApiUrl}repos/${userid}/${repoName}/commits?sha=${branchName}`;
    return this._http.get(url)
      .map((res: Response) => res.json());
  }

}
