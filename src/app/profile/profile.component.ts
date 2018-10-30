import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // variable declarations
  userid: string;
  userProfile: any;
  private sub: any;
  // constructor function
  constructor(
    private _service: DataService, private route: ActivatedRoute,private _router: Router
  ) {
   
  }
  // on page load method will call automatically
  ngOnInit() {
    // get the param from URL
    this.sub = this.route.params.subscribe(params => {
      this.userid = params['userid'];
      
      if(this.userid == sessionStorage.getItem("user")){
        this.userProfile = this._service.getUserDetail(this.userid);
        // insert and show userid on header
        let name = document.getElementById('username');
        (<HTMLInputElement>document.getElementById('username')).innerText = "Hi " + this.userProfile.name + ", ";
      }else{
        this._router.navigate(['profile', sessionStorage.getItem('user')]);
      }
      
    });
  }
}