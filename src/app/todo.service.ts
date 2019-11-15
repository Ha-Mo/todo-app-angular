import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from 'src/app/todo';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
  public todos: Todo[]; // Todo Liste
  todosUrl = 'https://jsonplaceholder.typicode.com/todos/';  // URL to web api
  constructor(
    private http: HttpClient) {}
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
  addTodo(todos: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todos);
  }
  deleteTodo(id: number): Observable<{}> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url);
  }
  updateTodo(todos: Todo): Observable<Todo> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.put<Todo>(url, todos);
  }
}
