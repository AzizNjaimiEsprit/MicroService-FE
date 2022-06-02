import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evaluation} from "../models/Evaluation";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getEvaluations(): Observable<any> {
    return this.http.get<Evaluation>('assets/mock/evaluation.json')
  }

  saveEval(body){
    return this.http.post('url',body)
  }

  getEval(id){
    return this.http.get<Evaluation>('assets/mock/evaluation/'+id)
  }
}
