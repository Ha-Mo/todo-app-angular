import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [TodoService],
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos: Todo[]; // Todo liste
   editTodo: Todo; // bearbeitetes Todo

  ngOnInit() {
     this.loadTodos();
  }
  constructor(private todoService: TodoService) {}
  // Todos anzeigen
  loadTodos(): void {
    this.todoService.getTodo()
      .subscribe((data: Todo[]) => { this.todos = data; });
  }
  // todos Löschen
  delete(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService
      .deleteTodo(todo.id)
      .subscribe();
  }
  // todos bearbeiten
  workOnTodo(): void {
    console.log('bearbeiten');
    if (this.editTodo) {
      this.todoService.updateTodo(this.editTodo)
      .subscribe (todo => {
        const index = todo ? this.todos.findIndex(t => t.id === todo.id) : -1;
        if (index > 1) {
          this.todos[index] = todo;
        }
      });
      this.editTodo = undefined;
    }
  }
  edit(todo: Todo) {
    this.editTodo = todo;
  }
}
