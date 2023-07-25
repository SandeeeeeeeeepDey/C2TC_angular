import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  private API='http://localhost:8081'

  public registerStudent(body:any){
    return this.http.post(this.API+ '/registerStudent',body)
    .pipe(catchError((err)=>{return throwError(err.message)}))
  }

  public listStudents(){
    return this.http.get(this.API+ '/listStudents')
    .pipe(catchError((err)=>{return throwError(err.message)}))
  }

  public deleteStudent(roll:any){
    return this.http.delete(this.API+ '/removeStudent?roll='+roll)
    .pipe(catchError((err)=>{return throwError(err.message)}))
  }

  public updateStudent(body:any){
    return this.http.put(this.API+ '/updateStudent',body)
    .pipe(catchError((err)=>{return throwError(err.message)}))
  }

}
