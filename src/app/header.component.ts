import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { envConfig } from './config/config';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls:['app.component.scss']
})
export class HeaderComponent implements OnInit {

  config: any;
  
  constructor(
    private _service: DataService
  ) {
    
  }

  ngOnInit() {
    this.config = envConfig;
   }
 

}
