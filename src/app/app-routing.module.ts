/**
 * ng route for root route
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';

// You can import routes with lazy loading
@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }, // for lazy loading
    { path: 'profile/:userid', loadChildren:'./profile/profile.module#ProfileModule' }, // for lazy loading
    { path: '**', component: HomeComponent }, // for lazy loading
  ])], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
