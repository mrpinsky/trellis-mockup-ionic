import { Component } from '@angular/core';

import { DisplayLimit } from '../../providers/display-limit';
import { FixtureData } from '../../providers/fixture-data';

/*
  Generated class for the CommunityList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-community-list',
  templateUrl: 'community-list.html'
})
export class CommunityListPage {
  communities: TrellisCommunity[];

  constructor(
    private dl: DisplayLimit,
    private fixtures: FixtureData
  ) {
    dl.displayLimit(this, { name: 'communities', increment: 5 });
    this.communities = this.fixtures.communities;
  }

}
