import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent }   from './profile.component';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ProfileRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule { }
