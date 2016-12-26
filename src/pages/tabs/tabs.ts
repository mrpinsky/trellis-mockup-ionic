import { Component } from '@angular/core';

import { ConversationViewPage } from '../conversation/conversation';
import { TodoPage } from '../todo/todo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodoPage;
  tab2Root: any = ConversationViewPage;

  constructor() {

  }
}
