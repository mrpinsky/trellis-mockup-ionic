import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { Storage } from '@ionic/storage';

import { FixtureData, TrellisFaker, DisplayLimit } from '../providers/index';

import { MyApp } from './app.component';
import { ConversationDetailPage, ConversationListPage, CommunityDetailPage, CommunityListPage, NotFoundPage, TrellisReactionModalPage } from '../pages/index';

import { ConversationSummaryComponent, CommunitySummaryComponent, PostFooterComponent, FloCommentComponent, ReactionStackComponent, ToplineComponent, DetailToplineComponent, ReplyEditorComponent, TrellisMenuComponent } from '../components/index';

const routes = [
  {
    path: 'communities',
    component: CommunityListPage,
  },
  {
    path: 'conversations',
    component: ConversationListPage,
  },
  {
    path: '',
    redirectTo: '/conversations',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPage,
  }
];

@NgModule({
  declarations: [
    MyApp,
    ConversationDetailPage,
    ConversationListPage,
    CommunityListPage,
    CommunityDetailPage,
    ConversationSummaryComponent,
    CommunitySummaryComponent,
    PostFooterComponent,
    FloCommentComponent,
    ReactionStackComponent,
    ToplineComponent,
    DetailToplineComponent,
    ReplyEditorComponent,
    TrellisReactionModalPage,
    TrellisMenuComponent,
    NotFoundPage,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConversationDetailPage,
    ConversationListPage,
    CommunityListPage,
    CommunityDetailPage,
    TrellisReactionModalPage,
    NotFoundPage,
  ],
  providers: [
    FixtureData,
    TrellisFaker,
    DisplayLimit,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
