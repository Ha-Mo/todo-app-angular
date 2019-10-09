import { Component, OnInit } from '@angular/core';
import {TodosService} from'../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [TodosService],
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]; //Todo liste

  ngOnInit() {
    this.loadTodos();
  }

  constructor(private todosService: TodosService) {}

  //Todos anzeigen
  loadTodos(): void {
    this.todosService.getTodo()
      .subscribe((data: Todo[]) =>{ this.todos = data});
  }

  deleteTodo(i){
    console.log("löschen");
    this.todos.splice(i, 1);
  }
}