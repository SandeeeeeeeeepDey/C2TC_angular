import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpServices:HttpClient) { }
  
  postUser(information:Users){
    return this.httpServices.post<Users[]>('https://64bba5d27b33a35a44468b35.mockapi.io/human', information)
    .pipe(catchError(error=>{return throwError(error.message)}))
  }
}
