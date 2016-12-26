import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { profiles, documents } from '../../assets/fixtures';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  thread: Array<{
    id: number,
    authorID: number,
    content: string,
    reactions: {
      likes: Array<number>,
      dislikes: Array<number>,
      agrees: Array<number>,
    },
    reply_parents: Array<number>;
  }>;

  constructor(public navCtrl: NavController) {
    const rootPage = documents[0];
    this.thread = documents.filter((doc) => {
      for (const id in rootPage.reply_parents) {
        if (!doc.reply_parents.includes(id)) return false;
      }
      return true;
    });
  }

  get rootPage() {
    return this.thread[0];
  }

  get replies() {
    return this.thread.slice(1);
  }

}
