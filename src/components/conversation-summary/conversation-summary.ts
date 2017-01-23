import { Component, Input } from '@angular/core';

import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the ConversationSummary component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'conversation-summary',
  templateUrl: 'conversation-summary.html'
})
export class ConversationSummaryComponent {
  @Input() document: TrellisDoc;

  constructor(private fixtures: FixtureData) {}

  get replies() {
    return this.document.replies.length;
  }
}
