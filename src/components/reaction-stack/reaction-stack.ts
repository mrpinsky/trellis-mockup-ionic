import { Component, Input } from '@angular/core';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the ReactionStack component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'reaction-stack',
  templateUrl: 'reaction-stack.html'
})
export class ReactionStackComponent {
  @Input()
  reactions: {
    likes: number[],
    agrees: number[],
    disagrees: number[],
  };
  showingReactions: boolean = false;
  showing: {
    likes: boolean,
    agrees: boolean,
    disagrees: boolean,
  }

  constructor(private fixtures: FixtureData) {
    console.log('Hello ReactionStack Component');
    this.showing = {
      likes: true,
      dislikes: true,
      agrees: true,
    };
  }

  get likes() {
    return this.reactions.likes;
  }

  get dislikes() {
    return this.reactions.dislikes;
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

}
