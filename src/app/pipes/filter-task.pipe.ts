import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterTask',
  pure: false
})
export class FilterTaskPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] {
    return lists.filter(list => list.completed === completed);
  }

}
