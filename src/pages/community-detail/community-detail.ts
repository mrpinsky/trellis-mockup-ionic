import { Component, Input } from '@angular/core';

/*
  Generated class for the CommunityDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-community-detail',
  templateUrl: 'community-detail.html'
})
export class CommunityDetailPage {
  @Input() community: TrellisCommunity;
}
