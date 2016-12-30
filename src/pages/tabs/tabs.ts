import { Component } from '@angular/core';

import { ConversationViewPage } from '../conversation/conversation';
import { TodoPage } from '../todo/todo';
import { IoniclessConvoPage } from '../ionicless/ionicless';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ConversationViewPage;
  tab2Root: any = TodoPage;
  tab3Root: any = IoniclessConvoPage;

  constructor() {

  }
}
