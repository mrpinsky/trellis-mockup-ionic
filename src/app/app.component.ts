import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ConversationDetailPage } from '../pages/conversation-detail/conversation-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = ConversationDetailPage;

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
