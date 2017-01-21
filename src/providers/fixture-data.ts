import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { TrellisFaker } from './trellis-faker';

import { Profile, Community, TrellisDocument } from '../models/index';

/*
  Generated class for the FixtureData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
const NUM_PROFILES = 5;
const NUM_COMMUNITIES = 3;
const NUM_DOCUMENTS = 12;

@Injectable()
export class FixtureData implements OnInit {
  private $$profiles: TrellisProfile[];
  private $$documents: TrellisDoc[];
  private $$communities: TrellisCommunity[];
  private nextDocumentId: number;
  private nextProfileId: number;
  private nextCommunityId: number;

  constructor(private faker: TrellisFaker) {
    this.nextDocumentId = 0;
    this.nextProfileId = 0;
    this.nextCommunityId = 0;

    this.$$profiles = [];
    while (this.$$profiles.length < NUM_PROFILES) {
      this.$$profiles.push(
        faker.fakeProfile(this.nextProfileId)
      );
      this.nextProfileId = this.nextProfileId + 1;
    }

    this.$$communities = [];
    while(this.$$communities.length < NUM_COMMUNITIES) {
      this.$$communities.push(
        faker.fakeCommunity(
          this.nextCommunityId,
          this.$$profiles
        )
      );
      this.nextCommunityId = this.nextCommunityId + 1;
    }

    this.$$documents = [];
    while (this.$$documents.length < NUM_DOCUMENTS) {
      this.$$documents.push(
        faker.fakeDocument(
          this.nextDocumentId,
          this.$$profiles,
          this.$$communities,
          this.$$documents
        )
      );
      this.nextDocumentId = this.nextProfileId + 1;
    }
  }

  ngOnInit() {
    this.$$documents.forEach(doc => {
      doc.setReplies(this.repliesTo(doc));
    });
  }

  repliesTo(root: TrellisDoc): TrellisDoc[] {
    return this.$$documents.filter(doc => {
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

  getDocumentById(id) {
    return this.$$documents.filter(doc => doc.id === id)[0];
  }

  getProfileById(id) {
    return this.$$profiles.filter(profile => profile.id === id)[0];
  }

  get conversations(): TrellisDoc[] {
    return this.$$documents.filter(doc => doc.reply_parents.length === 1);
  }

  countRepliesTo(id) {
    return this.$$documents.filter((doc) => {
      return doc.reply_parents.filter(parentId => parentId === id).length > 0;
    }).length - 1;
  }

  createDocument(creatorId: number, opts?: NewDocOpts) {
    const reply_parents = (opts && opts.inReplyTo && this.getDocumentById(opts.inReplyTo).reply_parents) || [];
    reply_parents.push(this.nextDocumentId);

    const reply: TrellisDocument = new TrellisDocument(
      this.nextDocumentId,
      creatorId,
      opts
    );

    this.nextDocumentId++;
    return reply;
  }

  publishDocument(doc: TrellisDocument) {
    this.$$documents.push(doc);
  }

}
