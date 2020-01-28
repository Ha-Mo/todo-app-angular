import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIcon } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HinzugefuegtComponent } from './hinzugefuegt/hinzugefuegt.component';
import { TodoListeComponent } from './todo-liste/todo-liste.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HinzugefuegtComponent,
    TodoListeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ScrollingModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    AppComponent,
    TodosComponent,
    HinzugefuegtComponent,
    TodoListeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
