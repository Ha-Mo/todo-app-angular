import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [],
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];
  @Input() todoOpen: Todo[];
  @Input() filter: string;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();
  @Output() changeTitle: EventEmitter<Todo> = new EventEmitter();
  @Output() abbrechen: EventEmitter<Todo> = new EventEmitter();

  ngOnInit() {}
  constructor() {}

  trackById(todo: any): string {
    return todo.id;
  }
  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
    console.log('completed');
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
    console.log('löschen');
  }

  onChangeTitle(todo: Todo) {
    this.changeTitle.emit(todo);
    console.log('change');
  }

  onAbbrechen(todo: Todo) {
    this.abbrechen.emit(todo);
    console.log('abbrechen 2');
  }
}
