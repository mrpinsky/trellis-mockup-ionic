import { Component, Input } from '@angular/core';

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
  @Input() conversation: TrellisDoc[];

  constructor() {
    console.log('Hello ConversationSummary Component');
  }

}
