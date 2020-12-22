import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../../services/to-do.service';
import { List } from '../../models/list.model';
import { ItemList } from '../../models/list-items.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  list: List;
  nameItem: string = '';

  constructor(private toDo: ToDoService,
    private router: ActivatedRoute) {

    const listId = this.router.snapshot.paramMap.get('listId')

    this.list = this.toDo.getList(listId);
  }

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }
    const newItem = new ItemList(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = "";
    this.toDo.saveStorage();
  }

  changeCheck(item: ItemList) {
    const pending = this.list.items.filter(itemData => !itemData.completed)
      .length;

    if (pending === 0) {
      this.list.completedAt = new Date();
      this.list.completed = true;
    } else {
      this.list.completedAt = null;
      this.list.completed = false;
    }


    this.toDo.saveStorage();
  }


  deleteItem(i: number) {
    this.list.items.splice(i, 1);
    this.toDo.saveStorage();

  }
}
