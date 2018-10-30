import { NgModule } from '@angular/core';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent }   from './branch.component';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BranchRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [BranchComponent],
  providers: [],
})
export class BranchModule { }
