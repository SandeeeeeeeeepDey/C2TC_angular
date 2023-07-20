import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ObservableType} from './info-type'
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  getInfo=()=>{
    return this.httpClient
    .get<ObservableType[]>("../assets/info.json")
    .pipe(catchError((error)=>{return throwError(error.message)})); // to handle if cant reach the DB
    // .pipe(catchError((error)=>{return throwError(error.message||"clientError")}));
  }
  // errHandler(error:HttpErrorResponse){
  //   return throwError(error.message||"clientError")
  // }
}
