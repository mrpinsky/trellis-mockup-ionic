import { FixtureData } from '../providers/fixture-data';

export class TrellisDocument {
  id: number;
  short_text: string;
  long_text: string;
  editors: number[];
  reply_parents: number[];
  reactions: {
    likes: number[],
    agrees: number[],
    disagrees: number[],
  };
  $permission: number;

  constructor({ id, title, content, editors, reply_parents, reactions, $permission }) {
    this.id = id;
    this.short_text = title;
    this.long_text = content;
    this.editors = editors;
    this.reply_parents = reply_parents;
    this.reactions = reactions;
    this.$permission = $permission;
  }

  get title() {
    return this.short_text;
  }

  get content() {
    return this.long_text;
  }

  set title(v) {
    this.short_text = v;
  }

  set content(v) {
    this.long_text = v;
  }

  // buildReply() {
  //   return this.fixtures.createDocument(2);
  // }

  get totalReactions() {
    return this.reactions.likes.length
    + this.reactions.agrees.length
    + this.reactions.disagrees.length;
  }
}
