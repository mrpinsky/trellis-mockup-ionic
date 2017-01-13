import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';

@Component({
  selector: 'conversation-view',
  templateUrl: 'conversation.html'
})
export class ConversationViewPage {
  $reply: TrellisDocument;
  thread: TrellisDocument[];

  constructor(public navCtrl: NavController, private fixtures: FixtureData) {
    const rootPost = fixtures.documents[0];
    this.thread = fixtures.documents.filter((doc) => {
      return rootPost.reply_parents.reduce((result, id) => {
        return result && doc.reply_parents.indexOf(id) >= 0;
      }, true);
    });
    this.$reply = fixtures.createDocument(2, { inReplyTo: rootPost })
  }

  get rootPost() {
    return this.thread[0];
  }

  get replies() {
    return this.thread.slice(1);
  }

  get reply() {
    return this.$reply;
  }
}
