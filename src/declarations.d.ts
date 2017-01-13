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
  dislikes: number[],
  agrees: number[],
}

interface NewDocOpts {
  title?: string,
  content?: string,
  inReplyTo?: TrellisDocument,
  perm?: number,
}

interface TrellisDocument {
  id: number,
  editors: number[],
  title: string,
  content: string,
  reactions: TrellisReactions,
  reply_parents: number[],
  $permission: number,
}

interface TrellisThread extends TrellisDocument {
  replies: TrellisDocument[];
}

interface TrellisProfile {
  id: number,
  short_text: string,
  image_url: string,
}
