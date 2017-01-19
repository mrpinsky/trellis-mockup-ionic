import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FixtureData } from '../providers/fixture-data';

import { MyApp } from './app.component';
import { ConversationViewPage } from '../pages/conversation/conversation';
import { TrellisReactionModalPage } from '../pages/trellis-reaction-modal/trellis-reaction-modal';

import { PostFooterComponent } from '../components/post-footer/post-footer';
import { FloCommentComponent } from '../components/flo-comment/flo-comment';
import { ReactionStackComponent } from '../components/reaction-stack/reaction-stack';
import { TrellisMenuComponent } from '../components/trellis-menu/trellis-menu';
import { ToplineComponent } from '../components/topline/topline';
import { DetailToplineComponent } from '../components/detail-topline/detail-topline';
import { ReplyEditorComponent } from '../components/reply-editor/reply-editor';

@NgModule({
  declarations: [
    MyApp,
    ConversationViewPage,
    PostFooterComponent,
    FloCommentComponent,
    ReactionStackComponent,
    TrellisMenuComponent,
    ToplineComponent,
    DetailToplineComponent,
    ReplyEditorComponent,
    TrellisReactionModalPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConversationViewPage,
    TrellisReactionModalPage,
  ],
  providers: [
    FixtureData,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
