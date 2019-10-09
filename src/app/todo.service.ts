import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Todo} from 'src/app/todo';

import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TodosService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';  // URL to web api
  constructor(
    private http: HttpClient)
    {}
    
  // Abfrage der Todos
  getTodo (): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosUrl)
  }
}  
