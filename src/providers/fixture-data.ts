import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as faker from 'faker';

import { Profile, Community, TrellisDocument } from '../models/index';

interface NewDocOpts {
  title?: string,
  content?: string,
  inReplyTo?: TrellisDocument,
  perm?: number,
}

/*
  Generated class for the FixtureData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FixtureData {
  private $$profiles: Profile[];
  private $$documents: TrellisDocument[];
  private nextDocumentId: number;
  private nextProfileId: number;

  constructor() {
    this.$$profiles = [
      new Profile(1, `${faker.name.firstName()} ${faker.name.lastName()}`, faker.image.avatar()),
      new Profile(2, `${faker.name.firstName()} ${faker.name.lastName()}`, faker.image.avatar()),
      new Profile(3, `${faker.name.firstName()} ${faker.name.lastName()}`, faker.image.avatar()),
    ];

    this.$$documents = [
      new TrellisDocument({
        id: 1,
        editors: [1],
        title: 'This is the root post',
        content: faker.lorem.paragraph(),
        reactions: {
          likes: [2],
          disagrees: [3],
          agrees: [],
        },
        reply_parents: [1],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 2,
        editors: [2],
        title: '',
        content: `This is a reply with one child.  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [],
          agrees: [1],
        },
        reply_parents: [1, 2],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 3,
        editors: [3],
        title: '',
        content: `This is a reply with no children.  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [2, 1],
          agrees: [],
        },
        reply_parents: [1, 3],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 4,
        editors: [1],
        title: '',
        content: `This is a grandchild reply with no children  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [],
          agrees: [],
        },
        reply_parents: [1, 2, 4],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 5,
        editors: [3],
        title: '',
        content: `This is a reply with child and grandchild.  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [],
          agrees: [],
        },
        reply_parents: [1, 5],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 6,
        editors: [1],
        title: '',
        content: `This is a grandchild reply with child.  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [],
          agrees: [],
        },
        reply_parents: [1, 5, 6],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 7,
        editors: [2],
        title: '',
        content: `This is a great-grandchild reply (no children).  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [1, 2],
          disagrees: [3],
          agrees: [],
        },
        reply_parents: [1, 5, 6, 7],
        $permission: 2,
      }),
      new TrellisDocument({
        id: 8,
        editors: [3],
        title: '',
        content: `This is another root post that shouldn\'t be rendered.  ${faker.lorem.lines(2)}`,
        reactions: {
          likes: [],
          disagrees: [],
          agrees: [],
        },
        reply_parents: [8],
        $permission: 2,
      }),
    ];
    this.nextDocumentId = this.$$documents.length + 1;
    this.nextProfileId = this.$$profiles.length + 1;
  }

  get profiles() {
    return this.$$profiles;
  }

  get documents() {
    return this.$$documents;
  }

  getPostById(id) {
    return this.$$documents.filter(doc => doc.id === id)[0];
  }

  getProfileById(id) {
    return this.$$profiles.filter(profile => profile.id === id)[0];
  }

  getThread(rootPost): TrellisDocument[] {
    return this.$$documents.filter(doc => {
      return rootPost.reply_parents.reduce((result, id) => {
        return result && doc.reply_parents.indexOf(id) >= 0;
      }, true);
    });
  }

  getConversations(): TrellisDocument[][] {
    return this.$$documents.filter(doc => doc.reply_parents.length === 1)
    .map(this.getThread);
  }

  countRepliesTo(id) {
    return this.$$documents.filter((doc) => {
      return doc.reply_parents.filter(parentId => parentId === id).length > 0;
    }).length - 1;
  }

  createDocument(creatorId: number, opts?: NewDocOpts) {
    const reply_parents = (opts && opts.inReplyTo && opts.inReplyTo.reply_parents) || [];
    reply_parents.push(this.nextDocumentId);

    const reply: TrellisDocument = new TrellisDocument({
      id: this.nextDocumentId,
      editors: [creatorId],
      title: (opts && opts.title) || '',
      content: (opts && opts.content) || '',
      reactions: {
        likes: [],
        agrees: [],
        disagrees: [],
      },
      reply_parents: reply_parents,
      $permission: opts.perm || 2,
    });

    this.nextDocumentId++;
    return reply;
  }

  publishDocument(doc: TrellisDocument) {
    this.$$documents.push(doc);
  }

}
