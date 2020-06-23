import { Pipe, PipeTransform, Input } from '@angular/core';
import {Todo} from './todo';

@Pipe({
  name: 'todosFilter',
})

export class FilterPipe implements PipeTransform {

  transform(alltodos: Todo[], filter: string): any {
    if (filter === 'Erledigt') {
      return alltodos.filter(todo => todo.completed);
    } else if (filter === 'Offen') {
      return alltodos.filter(todo => !todo.completed);
    }
  }

}
