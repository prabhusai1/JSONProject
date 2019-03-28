import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';

import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url : string ="http://localhost:3000/Employees";

  constructor(private http:HttpClient) { }

  getData():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  
}
