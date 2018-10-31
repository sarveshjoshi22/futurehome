/**
 * subject routing module
 * location : src/app/subject/subject-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommitsComponent } from './commits.component';

const commitsRoutes: Routes = [
  {
    path: '',
    component: CommitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(commitsRoutes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule { }
