import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';  // URL to web api

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodo(todo: Todo, id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.put<Todo>(url, todo);
  }
}
