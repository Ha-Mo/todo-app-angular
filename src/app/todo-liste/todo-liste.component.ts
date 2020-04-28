import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-liste',
  templateUrl: './todo-liste.component.html',
  styleUrls: ['./todo-liste.component.css'],
  providers: []
})
export class TodoListeComponent implements OnInit {
  todos: Todo[]; // Todo liste
  filter = 'all'; // Filtern nach Status der Todos
  todoOpen: Todo[];
  todoCompleted: Todo[];
  filteredTodos = this.todos;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
    this.todosFiltered();
  }

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
  // Todos alpabteisch sortieren
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

  // Todos hinzufügen
 onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(
      (data: Todo) => {this.todos.push(data);
      });
    console.log('hinzufügen' + todo);
    console.log(this.todos);
  }
  // Todos bearbeiten
  onToggleTodoComplete(todo: Todo) {
    this.todoService
      .updateTodo(todo, todo.id)
      .subscribe(
        (updatedTodo) => {todo = updatedTodo;
        }
      );
    console.log('onCompletd' + todo);
  }
  // Todos löschen
  onRemoveTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoCompleted = this.todos.filter(t => t !== todo);
    this.todoOpen = this.todos.filter(t => t !== todo);
    this.todoService
      .deleteTodo(todo.id)
      .subscribe();
  }
  // Titel ändern
  onChangeTitle(todo: Todo) {
    this.todoService
      .updateTodo(todo, todo.id)
      .subscribe(
        (updatedTodo) => {todo = updatedTodo;
        }
      );
    console.log('change' + todo);
  }

  onAbbrechen(todo: Todo) {
    console.log(todo + 'abbrechen 3');
  }
}
