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
  }

  constructor() {
    this.todo = {
      UserId: undefined,
      id: undefined,
      title: undefined,
      completed: false,
    };
  }
  // Todo hinzufügen
  addTodo(event?: any) {
    this.add.emit(this.todo);
    console.log(this.todo);
    this.todo = {
      UserId: undefined,
      id: undefined,
      title: undefined,
      completed: false,
    };
  }
}
