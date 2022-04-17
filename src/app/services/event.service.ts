import { event } from './../models/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  addEvent():Observable<event[]>{
   return this.http.get<event[]>('http://localhost:3000/event').pipe(
     map(res=>res.map((res)=>{
       return{
         title:res.title,
         date:res.date

       }
     }))

   )
  }
}
