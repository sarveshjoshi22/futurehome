import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'commits',
  templateUrl: 'commits.component.html',
  styleUrls: ['commits.component.scss']
})
export class CommitsComponent implements OnInit {

  // variable declarations
  userId: string;
  repoName: string;
  branchName: string;
  showLoader: boolean = false;
  commitsData: any;
  commitsErrorMsg : string ='';
  private sub: any;
  // constructor function
  constructor(
    private dataService: DataService, private route: ActivatedRoute,private _router: Router
  ) {
   
  }
  // on page load method will call automatically
  ngOnInit() {
    // get the param from URL
    this.sub = this.route.params.subscribe(params => {
      this.userId = params['userName'];
      this.repoName = params['repoName'];
      this.branchName = params['branchName'];
      this.showLoader = true;
      this.dataService.getUserCommits(this.userId,this.repoName,this.branchName).subscribe(commitsData => {
        console.log(commitsData);
        this.commitsData = commitsData;
        this.showLoader = false;
      }, (errorCommits) => {
        this.showLoader = false;
        this.commitsErrorMsg = 'No record found'
      });
      
      
    });
  }
}