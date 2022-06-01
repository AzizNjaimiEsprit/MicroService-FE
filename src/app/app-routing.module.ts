import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidateComponent} from './candidate/candidate.component';


const routes: Routes = [
  { path: 'candidat', component: CandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
