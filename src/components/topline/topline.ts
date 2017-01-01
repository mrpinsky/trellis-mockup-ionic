import { Component } from '@angular/core';
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
  s
  constructor(private fixtures: FixtureData) {
    console.log('Hello Topline Component');
  }

}
