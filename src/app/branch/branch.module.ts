import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent }   from './branch.component';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BranchRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [BranchComponent],
  providers: [],
})
export class BranchModule { }
