import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ConversationDetailPage } from '../pages/conversation-detail/conversation-detail';
// import { ConversationListPage } from '../pages/conversation-list/conversation-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = ConversationDetailPage;
  // rootPage = ConversationListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.overlaysWebView(false);
      StatusBar.hide();
      Splashscreen.hide();
    });
  }
}
