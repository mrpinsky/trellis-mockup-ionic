import { Injectable } from '@angular/core';
import { DocumentComponent } from '../components/document/document';
import 'rxjs/add/operator/map';

/*
  Generated class for the FixtureData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FixtureData {
  private $$profiles: Array<{ id: number, short_text: string }>;
  private $$documents: Array<{
    id: number,
    authorId: number,
    title: string,
    content: string,
    reactions: {
      likes: number[],
      dislikes: number[],
      agrees: number[],
    },
    reply_parents: number[],
  }>;

  constructor() {
    this.$$profiles = [
      {
        id: 1,
        short_text: 'Profile One',
      },
      {
        id: 2,
        short_text: 'Profile Two',
      },
      {
        id: 3,
        short_text: 'Profile Three',
      },
    ];

    this.$$documents = [
      {
        id: 1,
        authorId: 1,
        title: 'This is the root post',
        content: 'Lorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [2],
          dislikes: [3],
          agrees: [],
        },
        reply_parents: [1],
      },
      {
        id: 2,
        authorId: 2,
        title: '',
        content: 'This is a reply with one child.\n\n\tLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [1],
        },
        reply_parents: [1, 2],
      },
      {
        id: 3,
        authorId: 3,
        title: '',
        content: 'This is a reply with no children.\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [2, 1],
          agrees: [],
        },
        reply_parents: [1, 3],
      },
      {
        id: 4,
        authorId: 1,
        title: '',
        content: 'This is a grandchild reply with no children\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [1, 2, 4],
      },
      {
        id: 5,
        authorId: 3,
        title: '',
        content: 'This is a reply with child and grandchild.\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [1, 5],
      },
      {
        id: 6,
        authorId: 1,
        title: '',
        content: 'This is a grandchild reply with child.\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [1, 5, 6],
      },
      {
        id: 7,
        authorId: 2,
        title: '',
        content: 'This is a great-grandchild reply (no children).\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [1, 2],
          dislikes: [3],
          agrees: [],
        },
        reply_parents: [1, 5, 6, 7],
      },
      {
        id: 8,
        authorId: 3,
        title: '',
        content: 'This is another root post that shouldn\'t be rendered.\n\nLorem ipsum dolor sic amet consectetur.',
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [8],
      },
    ];
  }

  get profiles() {
    return this.$$profiles;
  }

  get documents() {
    return this.$$documents;
  }

  getPostById(id) {
    return this.$$documents.filter((doc) => doc.id === id)[0];
  }

  getProfileById(id) {
    return this.$$profiles.filter((profile) => profile.id === id)[0];
  }

}
