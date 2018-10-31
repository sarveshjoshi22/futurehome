import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']

})
export class HomeComponent implements OnInit {
  homeApiEndpoint: string;
  showData: boolean = false;
  showError: boolean = false;
  showLoader: boolean = false;
  userId: string = '';
  errorMsg: string = '';
  repoErrorMsg: string = '';
  repoData: any;
  profileData: any;
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    // check whether the user is login or not
    this.showError = false;
  }

  getGitData() {
    this.showLoader = true;
    this.dataService.getUserDetail(this.userId).subscribe(userData => {
      console.log(userData);
      this.showData = true;
      this.profileData = userData;
      this.showError = false;
      this.dataService.getUserRepos(this.userId).subscribe(repoData => {
        console.log(repoData);
        this.repoData = repoData;
        this.showLoader = false;
      }, (errorRepos) => {
        this.repoData = [];
        this.showLoader = false;
        this.repoErrorMsg = 'No record found'
      });

    }, (error) => {
      this.showData = false;
      this.showError = true;
      this.profileData = [];
      this.errorMsg = 'User not found, Please try again'
    });

  }
}