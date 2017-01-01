import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FixtureData } from '../providers/fixture-data';
import { MyApp } from './app.component';
import { TodoPage } from '../pages/todo/todo';
import { ConversationViewPage } from '../pages/conversation/conversation';
import { IoniclessConvoPage } from '../pages/ionicless/ionicless';
import { PostFooterComponent } from '../components/post-footer/post-footer';
import { FloCommentComponent } from '../components/flo-comment/flo-comment';
import { ReactionStackComponent } from '../components/reaction-stack/reaction-stack';
import { TrellisMenuComponent } from '../components/trellis-menu/trellis-menu';
import { ToplineComponent } from '../components/topline/topline';
import { DetailToplineComponent } from '../components/detail-topline/detail-topline';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TodoPage,
    ConversationViewPage,
    IoniclessConvoPage,
    PostFooterComponent,
    FloCommentComponent,
    ReactionStackComponent,
    TrellisMenuComponent,
    ToplineComponent,
    DetailToplineComponent,
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
    IoniclessConvoPage,
    TabsPage
  ],
  providers: [
    FixtureData,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
