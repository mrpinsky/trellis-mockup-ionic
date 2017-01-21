import Quill from 'quill';

export class Community implements TrellisCommunity {
  id: number;
  short_text: string;
  long_text: string;
  moderators: TrellisProfile[];
  tags: string[];
  members: TrellisProfile[];
  conversations: number[];

  constructor(id: number, name: string, creator: TrellisProfile, opts: NewCommunityOpts) {
    opts = opts || {};

    this.id = id;
    this.short_text = name;
    this.long_text = opts.long_text || '';
    this.moderators = [creator];
    this.tags = opts.tags || [];
    this.members = opts.members || [];
    this.conversations = opts.conversations || [];
  }

  get name() {
    return this.short_text;
  }

  get description() {
    return this.long_text;
  }

  set name(v) {
    this.short_text = v;
  }

  set description(v) {
    this.long_text = v;
  }
}
