import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableList } from './observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';



@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private httpServices:HttpClient) { }
  post(information:ObservableList){
    return this.httpServices.post<ObservableList[]>('https://64bba5d27b33a35a44468b35.mockapi.io/human', information)
    .pipe(catchError(error=>{return throwError(error.message)}))
  }
}
