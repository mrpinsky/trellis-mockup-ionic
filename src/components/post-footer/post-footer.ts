import { Component, Input } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the ReactionsBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'post-footer',
  templateUrl: 'post-footer.html'
})
export class PostFooterComponent {
  @Input()
  reactions: {
    likes: number[],
    dislikes: number[],
    agrees: number[],
  }

  testCheckboxResult: any;

  constructor(private alertCtrl: AlertController, private fixtures: FixtureData) {
    // this.updateReactions.bind(this);
  }

  get reactionTypes() {
    return Object.keys(this.reactions);
  }

  get reactionCount() {
    return this.reactionTypes.reduce((sum, rxn) => {
      return sum + this.reactions[rxn].length;
    }, 0);
  }

  react() {
    let alert = this.alertCtrl.create({
      title: 'Reactions',
      inputs: this.reactionTypes.map((rxn) => {
        let reacters: string;
        if (this.reactions[rxn].length > 0) {
          reacters = this.reactions[rxn].map((id) => {
            return this.fixtures.getProfileById(id).short_text;
          }).join(', ');
        } else {
          reacters = '';
        }
        return {
          type: 'checkbox',
          label: `${rxn} (${this.reactions[rxn].length}${reacters.length > 0 ? ' - ' : ''}${reacters})`,
          value: rxn,
          checked: this.reactions[rxn].indexOf(2) >= 0,
        }
      }),
      buttons: [
        {
          text: 'Okay',
          handler: (data) => {
            this.updateReactions(data);
          },
        }
      ]
    });
    alert.present();
  }

  updateReactions(data) {
    ["likes", "dislikes", "agrees"].forEach((rxn) => {
      this.reactions[rxn] = this.reactions[rxn].filter((id) => id !== 2);
      if (data.findIndex(r => r === rxn) >= 0) { // if the box was checked...
        this.reactions[rxn].push(2); // add me
      }
    });

  }
}
