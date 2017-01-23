import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';
import { TrellisDocument } from '../../models/index';

@Component({
  selector: 'conversation-detail',
  templateUrl: 'conversation-detail.html'
})
export class ConversationDetailPage {
  replying: boolean;
  @Input() $rootPost: TrellisDoc;

  constructor(public navCtrl: NavController, private fixtures: FixtureData) {
    this.$rootPost = fixtures.documents[0];
  }

  get rootPost() {
    return this.$rootPost;
  }

  get replies() {
    return this.$rootPost.replies;
  }

  openReplyEditor() {
    this.replying = true;
  }

  closeReplyEditor() {
    this.replying = false;
  }

  onPublished(reply: TrellisDocument) {
    this.fixtures.publishDocument(reply);
    this.$rootPost.replies.push(reply);
    this.replying = false;
  }
}
