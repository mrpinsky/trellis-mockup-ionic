import { Component, Input } from '@angular/core';

/*
  Generated class for the DetailTopline component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'detail-topline',
  templateUrl: 'detail-topline.html'
})
export class DetailToplineComponent {
  @Input()
  item: {
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

  constructor() {
    console.log('Hello DetailTopline Component');
  }

}
