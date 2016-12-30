import { Component, Input } from '@angular/core';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the FloComment component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'flo-comment',
  templateUrl: 'flo-comment.html'
})
export class FloCommentComponent {
  @Input()
  comment: {
    id: number,
    editors: number[],
    title: string,
    content: string,
    reactions: {
      likes: number[],
      dislikes: number[],
      agrees: number[],
    },
    reply_parents: number[],
    $permission: number,
  }

  constructor(private fixtures: FixtureData) {
    console.log('Hello FloComment Component');
  }

}
