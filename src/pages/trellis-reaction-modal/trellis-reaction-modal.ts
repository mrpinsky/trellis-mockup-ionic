import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the TrellisReactionModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'trellis-reaction-modal.html'
})
export class TrellisReactionModalPage {
  reactions: TrellisReactions;

  constructor(
    public viewCtrl: ViewController,
    private fixtures: FixtureData
  ) {
    this.reactions = { likes: [], agrees: [], disagrees: [] } // this.navParams.get('reactions');
  }

  get likes() {
    return this.reactions.likes;
  }

  get disagrees() {
    return this.reactions.disagrees;
  }

  get agrees() {
    return this.reactions.agrees;
  }

  get totalReactions() {
    return Object.keys(this.reactions).map((rxn) => this.reactions[rxn].length).reduce((acc, curr) => acc + curr);
  }

  $in(rxn, profile) {
    return this.reactions[rxn].filter((id) => id === profile.id).length > 0;
  }

  $toggle(rxn, profile) {
    if (this.$in(rxn, profile)) {
      this.reactions[rxn] = this.reactions[rxn].filter((id) => id !== profile.id);
    } else {
      this.reactions[rxn].push(profile.id);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
