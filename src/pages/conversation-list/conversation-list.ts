import { Component } from '@angular/core';

import { DisplayLimit } from '../../providers/display-limit';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the ConversationList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conversation-list',
  templateUrl: 'conversation-list.html'
})
export class ConversationListPage {
  $conversations: TrellisDoc[];

  constructor(
    private fixtures: FixtureData,
    private dl: DisplayLimit
  ) {
    dl.displayLimit(this, { name: 'conversations', increment: 5 });
    this.$conversations = this.fixtures.conversations;
  }

  get conversations() {
    return this.$conversations;
  }

}
