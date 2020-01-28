import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [],
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]; // Todo liste
  editTodo: Todo; // bearbeitetes Todo
  showTodo: boolean;
  filter = 'all'; // Filtern nach Status der Todos
  todoOpen: Todo[];
  todoCompleted: Todo[];
  filteredTodos = this.todos;

  ngOnInit() {
    this.loadTodos();
  }
  constructor(private todoService: TodoService) {}
  // Todos anzeigen
  loadTodos(): void {
    this.todoService.getTodo()
      .subscribe((data: Todo[]) => {
        this.todos = data;
        // sortiert alphabetisch
        this.todos.sort(this.sortieren);
        console.log(this.todos);
      });
  }
  // todos Löschen
  delete(todo: Todo) {
    this.todoService
      .deleteTodo(todo.id)
      .subscribe();
    this.todos = this.todos.filter(t => t !== todo);
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
      this.todos.sort(this.sortieren);
      this.editTodo = undefined;
    }
  }
  edit(todo: Todo) {
    this.editTodo = todo;
  }
  abbrechen() {
    this.editTodo = undefined;
    console.log('abbrechen');
  }
  // sortiert alphabetisch
  sortieren(a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  }
  // filtern nach Status der Todos
  todosFiltered(): Todo[] {
    console.log(this.filter);
    if ( this.filter === 'all') {
      this.filteredTodos = this.todos;
      console.log(this.filteredTodos);
      return this.filteredTodos;
    } else if ( this.filter === 'open') {
      this.todoOpen = this.todos.filter(todo => !todo.completed);
      this.filteredTodos = this.todoOpen;
      console.log(this.filteredTodos);
      return this.filteredTodos;
    } else if ( this.filter === 'completed') {
      this.todoCompleted = this.todos.filter(todo => todo.completed);
      this.filteredTodos = this.todoCompleted;
      console.log(this.filteredTodos);
      return this.filteredTodos;
    }
    return this.filteredTodos;
  }
  // Todos completed verändern, damit Todos dann in richtiger gefilterten Liste zu finden sind
  onChange(event, index, todo) {
    todo.completed = !todo.completed;
    console.log(index, event, todo);
  }

  trackById(todo: any): string {
    return todo.id;
  }
}

