import { Observable } from 'rxjs';
import { patient } from './../models/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor( private http:HttpClient) {}
  getData():Observable<patient>{
   return this.http.get<patient>('http://localhost:3000/patients')
  }
  postData(object:patient):Observable<patient>{
   return  this.http.post<patient>('http://localhost:3000/patients',object);
  }
  delete(id):Observable<patient>{
   return this.http.delete<patient>('http://localhost:3000/patients'+`/${id}`)
  }
  getById(id):Observable<patient>{
   return this.http.get<patient>('http://localhost:3000/patients'+`/${id}`)
  }
}
