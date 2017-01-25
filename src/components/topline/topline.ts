import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { FixtureData } from '../../providers/fixture-data';
/*
  Generated class for the Topline component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'topline',
  templateUrl: 'topline.html'
})
export class ToplineComponent {
  constructor(
    private fixtures: FixtureData,
    private route: ActivatedRoute
  ) {
    console.log(JSON.stringify(route, null, 2));
  }
}
