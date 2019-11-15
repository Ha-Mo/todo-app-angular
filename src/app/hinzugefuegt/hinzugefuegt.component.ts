import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-hinzugefuegt',
  templateUrl: './hinzugefuegt.component.html',
  providers: [TodoService],
  styleUrls: ['./hinzugefuegt.component.css']
})
export class HinzugefuegtComponent implements OnInit {
  public Todo$: Todo;
  // Array speichert die Todos
  todos: Todo[] = [];
  editTodo: Todo; // bearbeitets Todo

  ngOnInit() { }

  constructor(private todoService: TodoService) {}
  // todo erzeugen
  public createTodo(title: string): void {
    this.editTodo = undefined;
    title = title.trim();
    if (!title) {
      return;
    }
    const newTodo: Todo = {title} as Todo;
    this.todoService.addTodo(newTodo).subscribe(todo => this.todos.push(todo));
  }
  // todos löschen
  delete(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService
    .deleteTodo(todo.id)
    .subscribe();
  }
  // todos bearbeiten
  workOnTodo() {
    if (this.editTodo) {
      this.todoService.updateTodo(this.editTodo)
      .subscribe ( todo => {
        const index = todo ? this.todos.findIndex(t => t.id === todo.id) : -1;
        if (index > 1) {
          this.todos[index] = todo;
        }
      });
      this.editTodo = undefined;
    }
  }
  edit( todo: Todo) {
    this.editTodo = todo;
  }
}
