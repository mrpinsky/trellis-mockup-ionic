import { Component, Input } from '@angular/core';

import { TrellisDocument } from '../../models/index';
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
  comment: TrellisDocument;

  constructor(private fixtures: FixtureData) {}

}
