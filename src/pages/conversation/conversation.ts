import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';

@Component({
  selector: 'conversation-view',
  templateUrl: 'conversation.html'
})
export class ConversationViewPage {
  thread: Array<{
    id: number,
    authorId: number,
    title: string,
    content: string,
    reactions: {
      likes: number[],
      dislikes: number[],
      agrees: number[],
    },
    reply_parents: number[];
  }>;

  constructor(public navCtrl: NavController, private fixtures: FixtureData) {
    const rootPage = fixtures.documents[0];
    this.thread = fixtures.documents.filter((doc) => {
      return rootPage.reply_parents.reduce((result, id) => {
        return result && doc.reply_parents.indexOf(id) >= 0;
      }, true);
    });
  }

  get rootPost() {
    return this.thread[0];
  }

  get replies() {
    return this.thread.slice(1);
  }

}
