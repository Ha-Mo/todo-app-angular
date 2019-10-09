import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-hinzugefuegt',
  templateUrl: './hinzugefuegt.component.html',
  styleUrls: ['./hinzugefuegt.component.css']
})
export class HinzugefuegtComponent implements OnInit {

  ngOnInit() { }

  public Todo$: Todo;

  private id = 0;

  constructor() {
    this.Todo$ = {
      UserId: undefined,
      id: 0,
      title: undefined,
      completed: false
    };
    console.log(this.Todo$);
  }
  
  //todo erzeugen
  public createTodo(event?: any): Todo {
    console.log(this.Todo$);
    const newTodo = this.Todo$;
    this.Todo$ = {
      UserId: undefined,
      id: ++this.id,
      title: undefined,
      completed: false
    };
    if (newTodo) {
      this.todos.push(newTodo);
    }
    return newTodo;
  };
  // Array speichert die Todos
  todos = [];

  //todo löschen
  deleteTodo(i) {
    console.log("Löschen");
    this.todos.splice(i, 1);
  };
}
