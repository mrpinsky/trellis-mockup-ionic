export class TrellisDocument implements TrellisDoc {
  id: number;
  short_text: string;
  long_text: string;
  editors: number[];
  reply_parents: number[];
  reactions: TrellisReactions;
  $permission: number;
  replies: TrellisDoc[];
  communities: TrellisCommunity[];
  tags: string[];
  type: string;

  constructor(id: number, creatorId: number, opts?: NewDocOpts) {
    opts = opts || {};

    this.id = id;
    this.editors = [creatorId];
    this.short_text = opts.title || '';
    this.long_text = opts.content || '';
    this.reply_parents = (opts.inReplyTo && opts.inReplyTo.reply_parents.map(elem => elem)) || [];
    this.reply_parents.push(this.id);
    this.reactions = { likes: [], agrees: [], disagrees: [] };
    this.$permission = opts.perm || 2;
    this.replies = [];
    this.communities = opts.communities || [];
    this.tags = opts.tags || [];
    this.type = opts.type || (this.reply_parents.length === 1 ? 'post' : 'comment');
  }

  get title() {
    return this.short_text;
  }

  get computedTitle() {
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

  addReaction(rxnType, reacterId) {
    if (this.reactions[rxnType]) {
      this.reactions[rxnType].push(reacterId);
    }
  }

  // buildReply() {
  //   return this.fixtures.createDocument(2);
  // }

  get totalReactions() {
    return this.reactions.likes.length
    + this.reactions.agrees.length
    + this.reactions.disagrees.length;
  }

  setReplies(replies: TrellisDoc[]) {
    this.replies = replies;
  }

  set addReply(reply: TrellisDoc) {
    this.replies.push(reply);
  }
}
