import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ConversationSummary Component');
    this.text = 'Hello World';
  }

}
