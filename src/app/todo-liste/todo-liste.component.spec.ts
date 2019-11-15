import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListeComponent } from './todo-liste.component';

describe('TodoListeComponent', () => {
  let component: TodoListeComponent;
  let fixture: ComponentFixture<TodoListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
