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
  filter = 'Alle'; // Filtern nach Status der Todos
  todoOpen: Todo[];
  todoCompleted: Todo[];
  filteredTodos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  // Todos anzeigen
  loadTodos(): void {
    this.todoService.getTodo()
      .subscribe((data: Todo[]) => {
        this.todos = data;
        // sortiert alphabetisch
        this.todos.sort(this.sortieren);
      });
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
      (data: Todo) => {
        this.todos.push(data);
        console.log(data);
      });
    // alphabetisches Sortieren der Hinzugefügten Elemente
    this.todos.sort(this.sortieren);
    console.log(this.todos);
  }

  // Todos bearbeiten
  onToggleTodoComplete(todo: Todo) {
    this.todoService
      .updateTodo(todo, todo.id)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
    console.log('onCompletd' + todo);
  }

  // Todos löschen
  onRemoveTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService
      .deleteTodo(todo.id)
      .subscribe();
    console.log(this.todos);
  }

  // Titel ändern
  onChangeTitle(todo: Todo) {
    this.todoService
      .updateTodo(todo, todo.id)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
    console.log('change' + todo);
  }

  onAbbrechen(todo: Todo) {
    console.log(todo + 'abbrechen 3');
  }
}
