import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { TrellisFaker } from './trellis-faker';
import faker from 'faker';

import { TrellisDocument } from '../models/index';

/*
  Generated class for the FixtureData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
const NUM_PROFILES = 5;
const NUM_COMMUNITIES = 8;
const NUM_DOCUMENTS = 30;

@Injectable()
export class FixtureData {
  private $$profiles: TrellisProfile[] = [];
  private $$documents: TrellisDoc[] = [];
  private $$communities: TrellisCommunity[] = [];
  private nextDocumentId: number;
  private nextProfileId: number;
  private nextCommunityId: number;

  constructor(private trellisFaker: TrellisFaker) {
    this.nextDocumentId = 0;
    this.nextProfileId = 0;
    this.nextCommunityId = 0;

    while (this.$$profiles.length < NUM_PROFILES) {
      this.$$profiles.push(
        trellisFaker.fakeProfile(this.nextProfileId)
      );
      this.nextProfileId = this.nextProfileId + 1;
    }

    while(this.$$communities.length < NUM_COMMUNITIES) {
      this.$$communities.push(
        trellisFaker.fakeCommunity(
          this.nextCommunityId,
          this.$$profiles
        )
      );
      this.nextCommunityId = this.nextCommunityId + 1;
    }

    this.$$profiles.forEach(profile => {
      for(let i = 0; i < faker.random.number(4); i++) {
        const community = faker.random.arrayElement(this.$$communities);
        if (community.members.indexOf(profile) < 0) {
          community.members.push(profile);
        }
      }
    });

    while (this.$$documents.length < NUM_DOCUMENTS) {
      this.$$documents.push(
        trellisFaker.fakeDocument(
          this.nextDocumentId,
          this.$$profiles,
          this.$$communities,
          this.$$documents
        )
      );
      this.nextDocumentId = this.nextDocumentId + 1;
    }

    this.$$documents.forEach(doc => {
      doc.setReplies(this.repliesTo(doc));
    });

    this.conversations.forEach(convo => {
      convo.communities.forEach(community => {
        community.addConversation(convo);
      });
    })
  }

  repliesTo(root: TrellisDoc): TrellisDoc[] {
    return this.$$documents.filter(doc => doc.reply_parents.length > root.reply_parents.length)
    .filter(doc => {
      return root.reply_parents.map(id => doc.reply_parents.indexOf(id) >= 0)
      .reduce((acc, curr) => {
        return acc && curr;
      }, true);
    });
  }

  get profiles() {
    return this.$$profiles;
  }

  get documents() {
    return this.$$documents;
  }

  get conversations(): TrellisDoc[] {
    return this.$$documents.filter(doc => doc.reply_parents.length === 1);
  }

  get communities(): TrellisCommunity[] {
    return this.$$communities;
  }

  getDocumentById(id) {
    return this.$$documents[id];
  }

  getProfileById(id) {
    return this.$$profiles[id];
  }

  getCommunityById(id) {
    return this.$$communities[id];
  }

  countRepliesTo(id) {
    return this.$$documents.filter((doc) => {
      return doc.reply_parents.filter(parentId => parentId === id).length > 0;
    }).length - 1;
  }

  createDocument(creatorId: number, opts?: NewDocOpts) {
    const reply_parents = (opts && opts.inReplyTo && this.getDocumentById(opts.inReplyTo).reply_parents) || [];
    reply_parents.push(this.nextDocumentId);

    const reply: TrellisDoc = new TrellisDocument(
      this.nextDocumentId,
      creatorId,
      opts
    );

    this.nextDocumentId++;
    return reply;
  }

  publishDocument(doc: TrellisDoc) {
    this.$$documents.push(doc);
  }

}
