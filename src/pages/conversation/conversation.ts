import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';

@Component({
  selector: 'conversation-view',
  templateUrl: 'conversation.html'
})
export class ConversationViewPage {
  replying: boolean;
  thread: TrellisDocument[];

  constructor(public navCtrl: NavController, private fixtures: FixtureData) {
    this.loadThread();
  }

  loadThread() {
    const rootPost = this.fixtures.documents[0];
    this.thread = this.fixtures.documents.filter((doc) => {
      return rootPost.reply_parents.reduce((result, id) => {
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

  openReplyEditor() {
    this.replying = true;
  }

  closeReplyEditor() {
    this.replying = false;
  }

  onPublished(reply: TrellisDocument) {
    this.fixtures.publishDocument(reply);
    this.thread.push(reply);
    this.replying = false;
  }
}
