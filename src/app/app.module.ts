import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FixtureData } from '../providers/fixture-data';
import { MyApp } from './app.component';
import { TodoPage } from '../pages/todo/todo';
import { ConversationViewPage } from '../pages/conversation/conversation';
import { ReactionsBarComponent } from '../components/reactions-bar/reactions-bar';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TodoPage,
    ConversationViewPage,
    ReactionsBarComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoPage,
    ConversationViewPage,
    TabsPage
  ],
  providers: [
    FixtureData,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
