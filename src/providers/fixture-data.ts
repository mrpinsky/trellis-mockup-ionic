import { Injectable } from '@angular/core';
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
    authorID: number,
    content: string,
    reactions: {
      likes: Array<number>,
      dislikes: Array<number>,
      agrees: Array<number>,
    },
    reply_parents: Array<number>,
  }>;

  constructor() {
    this.$$profiles = [
      {
        id: 1,
        short_text: "One",
      },
      {
        id: 2,
        short_text: "Two",
      },
      {
        id: 3,
        short_text: "Three",
      },
    ];

    this.$$documents = [
      {
        id: 1,
        authorID: 1,
        content: "This is the root post",
        reactions: {
          likes: [2],
          dislikes: [3],
          agrees: [],
        },
        reply_parents: [1],
      },
      {
        id: 2,
        authorID: 2,
        content: "This is a reply with one child.",
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [1],
        },
        reply_parents: [2, 1],
      },
      {
        id: 3,
        authorID: 3,
        content: "This is a reply with no children.",
        reactions: {
          likes: [],
          dislikes: [2, 1],
          agrees: [],
        },
        reply_parents: [3, 1],
      },
      {
        id: 4,
        authorID: 1,
        content: "This is a grandchild reply with no children",
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [4, 2],
      },
      {
        id: 5,
        authorID: 3,
        content: "This is a reply with child and grandchild.",
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [5, 1],
      },
      {
        id: 6,
        authorID: 1,
        content: "This is a grandchild reply with child.",
        reactions: {
          likes: [],
          dislikes: [],
          agrees: [],
        },
        reply_parents: [6, 5],
      },
      {
        id: 7,
        authorID: 2,
        content: "This is a great-grandchild reply (no children).",
        reactions: {
          likes: [1, 2],
          dislikes: [3],
          agrees: [],
        },
        reply_parents: [7, 6],
      },
      {
        id: 8,
        authorID: 3,
        content: "This is another root post that shouldn't be rendered.",
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

}
