import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  lists: List[] = [];

  constructor() {

    this.getStorage();
    // const list1 = new List('Hacer la comida de la semana');
    // const list2 = new List('Buscar gimnasios para hacer deporte');

    // this.lists.push(list1, list2);
  }

  createList(title: string) {
    const list3 = new List(title);
    this.lists.push(list3);
    this.saveStorage();

    return list3.id
  }

  deleteList(list: List) {
    this.lists = this.lists.filter(listFromData => listFromData.id !== list.id);
    this.saveStorage();
  }

  getList(id: string | number) {
    id = Number(id);
    return this.lists.find(listData =>
      listData.id === id);

  }



  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists))
  }


  getStorage() {
    if (localStorage.getItem('data')) {

      this.lists = JSON.parse(localStorage.getItem('data'))
    } else {
      this.lists = [];
    }

  }


}

