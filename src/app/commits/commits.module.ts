import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsComponent }   from './commits.component';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommitsRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [CommitsComponent],
  providers: [],
})
export class CommitsModule { }
