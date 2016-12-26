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
    authorID: number,
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
      // Typescript was being difficult
      for (const id in rootPage.reply_parents) {
        for (const otherID in doc.reply_parents) {
          if (id === otherID) return true;
        }
        return false;
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
