export class Profile implements TrellisProfile {
  id: number;
  short_text: string;
  image_url: string;

  constructor(id: number, short_text: string, image_url: string) {
    this.id = id;
    this.short_text = short_text;
    this.image_url = image_url;
  }

  get name() {
    return this.short_text;
  }

  set name(v) {
    this.short_text = v;
  }
}
