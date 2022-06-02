import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidateComponent} from './candidate/candidate.component';
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {AddEvalComponent} from "./evaluation/components/add-eval/add-eval.component";
import {EditEvalComponent} from "./evaluation/components/edit-eval/edit-eval.component";
import {ListEvalComponent} from "./evaluation/components/list-eval/list-eval.component";
import {AddCandidaturesComponent} from "./candidatures/add-candidatures/add-candidatures.component";
import {EditCandidaturesComponent} from "./candidatures/edit-candidatures/edit-candidatures.component";
import {ListCandidaturesComponent} from "./candidatures/list-candidatures/list-candidatures.component";


const routes: Routes = [
  { path: 'candidat', component: CandidateComponent },
  { path: 'eval/addEval', component: AddEvalComponent },
  { path: 'eval/editEval', component: EditEvalComponent },
  { path: 'eval/editEval', component: EditEvalComponent },
  { path: 'eval/listEval', component: ListEvalComponent },
  { path: 'candidatures/addCandidature', component: AddCandidaturesComponent },
  { path: 'candidatures/editCandidature', component: EditCandidaturesComponent },
  { path: 'candidatures/listCandidatures', component: ListCandidaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
