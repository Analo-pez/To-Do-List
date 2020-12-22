import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../../services/to-do.service';
import { List } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @ViewChild(IonList) ionHtml: IonList;
  @Input() completed = true;

  constructor(public toDo: ToDoService,
    private router: Router,
    private alertCtrl: AlertController) { }


  selectedList(list: List) {
    if (this.completed) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`)
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`)
    }
  }

  deleteList(list: List) {
    this.toDo.deleteList(list);
  }

  async editList(list: List) {

    const alert = await this.alertCtrl.create({
      header: 'Edit List',
      inputs: [{
        name: 'title',
        type: 'text',
        value: list.title,
      }
      ],

      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
          this.ionHtml.closeSlidingItems();
        }
      },
      {
        text: 'Update',
        handler: (data) => {
          console.log(data);
          if (data.title.length === 0) {
            return;
          }

          list.title = data.title;
          this.toDo.saveStorage();
          this.ionHtml.closeSlidingItems();
        }
      }
      ]
    });

    await alert.present();
  }



}


