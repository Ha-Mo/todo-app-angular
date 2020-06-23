import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();
  @Output() changeTitle: EventEmitter<Todo> = new EventEmitter();
  @Output() abbrechen: EventEmitter<Todo> = new EventEmitter();

  aenderungen: boolean; // Todos bearbeiten Button

  ngOnInit() { }
  constructor() { }

  onAbbrechen(todo: Todo) {
    this.abbrechen.emit(todo);
    this.aenderungen = !this.aenderungen;
    console.log('abbrechen');
  }

  onToggleTodoComplete(todo: Todo) {
    todo.completed = !todo.completed;
    this.toggleComplete.emit(todo);
    console.log('completed Todo');
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  onChangeTitle(title: string) {
    console.log(title);
    this.aenderungen = !this.aenderungen;
    this.changeTitle.emit(this.todo);
  }
}
