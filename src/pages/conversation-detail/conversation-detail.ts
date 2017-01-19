import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';
import { Profile, TrellisDocument } from '../../models/index';

@Component({
  selector: 'conversation-view',
  templateUrl: 'conversation.html'
})
export class ConversationDetailPage {
  replying: boolean;
  @Input() $rootPost: TrellisDocument;
  thread: TrellisDocument[];

  constructor(public navCtrl: NavController, private fixtures: FixtureData) {
    this.thread = fixtures.getThread(this.$rootPost);
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
