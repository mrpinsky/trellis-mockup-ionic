import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the Ionicless page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ionicless',
  templateUrl: 'ionicless.html'
})
export class IoniclessConvoPage {
  item: {
    id: number,
    editors: number[],
    title: string,
    content: string,
    reactions: {
      likes: number[],
      dislikes: number[],
      agrees: number[],
    },
    reply_parents: number[],
    $permission: number,
    replies: Array<{
      id: number,
      editors: number[],
      title: string,
      content: string,
      reactions: {
        likes: number[],
        dislikes: number[],
        agrees: number[],
      },
      reply_parents: number[],
      $permission: number,
    }>,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fixtures: FixtureData
  ) {
    const rootPost = fixtures.documents[0];
    const thread = fixtures.documents.filter((doc) => {
      return rootPost.reply_parents.reduce((result, id) => {
        return result && doc.reply_parents.indexOf(id) >= 0;
      }, true);
    });
    this.item = Object.assign({}, rootPost, { replies: thread.slice(1) });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IoniclessPage');
  }



}
