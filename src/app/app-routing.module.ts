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
    { path: 'home', component: HomeComponent },
    { path: 'branch/:userName/:repoName', loadChildren:'./branch/branch.module#BranchModule' }, // for lazy loading
    { path: 'commits/:userName/:repoName/:branchName', loadChildren:'./commits/commits.module#CommitsModule' }, // for lazy loading
    { path: '**', component: HomeComponent },
  ])], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
