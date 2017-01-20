import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FixtureData } from '../providers/fixture-data';
import { DisplayLimit } from '../providers/display-limit';

import { MyApp } from './app.component';
import { ConversationDetailPage } from '../pages/conversation-detail/conversation-detail';
// import { ConversationListPage } from '../pages/conversation-list/conversation-list';
import { TrellisReactionModalPage } from '../pages/trellis-reaction-modal/trellis-reaction-modal';

import { PostFooterComponent } from '../components/post-footer/post-footer';
import { FloCommentComponent } from '../components/flo-comment/flo-comment';
import { ReactionStackComponent } from '../components/reaction-stack/reaction-stack';
import { ToplineComponent } from '../components/topline/topline';
import { DetailToplineComponent } from '../components/detail-topline/detail-topline';
import { ReplyEditorComponent } from '../components/reply-editor/reply-editor';
import { TrellisMenuComponent } from '../components/trellis-menu/trellis-menu';

@NgModule({
  declarations: [
    MyApp,
    ConversationDetailPage,
    // ConversationListPage,
    PostFooterComponent,
    FloCommentComponent,
    ReactionStackComponent,
    ToplineComponent,
    DetailToplineComponent,
    ReplyEditorComponent,
    TrellisReactionModalPage,
    TrellisMenuComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConversationDetailPage,
    TrellisReactionModalPage,
  ],
  providers: [
    FixtureData,
    DisplayLimit,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
