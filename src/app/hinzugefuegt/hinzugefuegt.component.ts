import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-hinzugefuegt',
  templateUrl: './hinzugefuegt.component.html',
  providers: [],
  styleUrls: ['./hinzugefuegt.component.css']
})
export class HinzugefuegtComponent implements OnInit {
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  // neues Todo
  todo: Todo;

  ngOnInit() {
    this.newTodo();
  }

  constructor() {}

  // Todo erstellen
  newTodo(): Todo {
    this.todo = {
      UserId: undefined,
      id: undefined,
      title: undefined,
      completed: false,
    };
    return this.todo;
  }
  // Todo hinzufügen
  addTodo(event?: any) {
    // Todo ohne Titel kann nicht hinzugefügt werden
    if (this.todo.title === undefined || this.todo.title === '') {
      console.log('undefined');
    } else {
      this.todo.title = this.todo.title.trim();
      this.add.emit(this.todo);
      console.log(this.todo);
      this.newTodo();
    }
  }
}
