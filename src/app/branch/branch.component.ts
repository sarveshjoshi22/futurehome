import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'branch',
  templateUrl: 'branch.component.html',
  styleUrls: ['branch.component.scss']
})
export class BranchComponent implements OnInit {

  // variable declarations
  userId: string;
  repoName: string;
  showLoader: boolean = false;
  branchData: any;
  branchErrorMsg : string ='';
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
      console.log(params);
      this.dataService.getUserBranches(this.userId,this.repoName).subscribe(branchData => {
        console.log(branchData);
        this.branchData = branchData;
        this.showLoader = false;
      }, (errorBranch) => {
        this.showLoader = false;
        this.branchErrorMsg = 'No record found'
      });
      
      
    });
  }
}