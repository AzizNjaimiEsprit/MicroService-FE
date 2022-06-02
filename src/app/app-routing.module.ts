import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidateComponent} from './candidate/candidate.component';
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {AddEvalComponent} from "./evaluation/components/add-eval/add-eval.component";
import {EditEvalComponent} from "./evaluation/components/edit-eval/edit-eval.component";
import {ListEvalComponent} from "./evaluation/components/list-eval/list-eval.component";


const routes: Routes = [
  { path: 'candidat', component: CandidateComponent },
  { path: 'eval/addEval', component: AddEvalComponent },
  { path: 'eval/editEval', component: EditEvalComponent },
  { path: 'eval/editEval', component: EditEvalComponent },
  { path: 'eval/listEval', component: ListEvalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
