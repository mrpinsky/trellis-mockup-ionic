import Quill from 'quill';

export class Community {
  short_text: string;
  long_text: string;
  rich_text: Quill.DeltaStatic;
  image_url: string;
  created_at: Date;
  updated_at: Date;
  extended: any;
  official: boolean;
  moderators: number[];
  tags: string[];
  members: number[];
  conversations: number[];
  followers: number[];
  viewingCommunities: number[];
  viewers: number[];

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
