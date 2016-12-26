import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {
  tasks: Array<{title: string, checked: boolean}>;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.tasks = [];
    storage.get('tasks').then((stored) => {
      this.tasks = stored || [];
    });
  }

  active() {
    return this.tasks.filter(t => !t.checked);
  }

  completed() {
    return this.tasks.filter(t => t.checked);
  }

  addTask(input) {
    this.tasks.push({
      title: input.value,
      checked: false
    });
    this.storage.set('tasks', this.tasks);
    input.value = '';
  }

  save() {
    this.storage.set('tasks', this.tasks);
  }
}
