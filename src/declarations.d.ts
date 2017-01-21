/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';

interface TrellisReactions {
  likes: number[],
  agrees: number[],
  disagrees: number[],
}

interface NewDocOpts {
  title?: string,
  content?: string,
  inReplyTo?: TrellisDoc,
  perm?: number,
  communities?: TrellisCommunity[],
  tags?: string[],
  type?: string,
}

interface TrellisDoc {
  id: number,
  short_text: string,
  long_text: string,
  editors: number[],
  reply_parents: number[],
  reactions: {
    likes: number[],
    agrees: number[],
    disagrees: number[],
  },
  $permission: number,
  replies: TrellisDoc[],
  communities: TrellisCommunity[],
  tags: string[],
  type: string,
  setReplies(replies: TrellisDoc[]),
}

interface TrellisProfile {
  id: number,
  short_text: string,
  image_url: string,
  name: string,
}

interface NewCommunityOpts {
  long_text?: string,
  tags?: string[],
  members?: TrellisProfile[],
  conversations?: number[],
}

interface TrellisCommunity {
  id: number,
  short_text: string,
  long_text: string,
  moderators: TrellisProfile[],
  tags: string[],
  members: TrellisProfile[],
  conversations: number[];
}
