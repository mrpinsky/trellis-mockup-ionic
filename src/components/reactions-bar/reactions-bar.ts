import { Component, Input } from '@angular/core';

/*
  Generated class for the ReactionsBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'reactions-bar',
  templateUrl: 'reactions-bar.html'
})
export class ReactionsBarComponent {
  @Input()
  reactions: {
    likes: number[],
    dislikes: number[],
    agrees: number[],
  }

  get reactionTypes() {
    return Object.keys(this.reactions);
  }
}
