/**
 * subject routing module
 * location : src/app/subject/subject-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchComponent } from './branch.component';

const branchRoutes: Routes = [
  {
    path: '',
    component: BranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(branchRoutes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
