import { Component } from '@angular/core';

import { ConversationDetailPage } from '../conversation-detail/conversation-detail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ConversationDetailPage;

  constructor() {

  }
}
