import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HinzugefuegtComponent } from './hinzugefuegt/hinzugefuegt.component';
import { TodoListeComponent } from './todo-liste/todo-liste.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HinzugefuegtComponent,
    TodoListeComponent,
    TodoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ScrollingModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    AppComponent,
    TodosComponent,
    HinzugefuegtComponent,
    TodoListeComponent,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
