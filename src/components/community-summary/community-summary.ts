import { Component, Input } from '@angular/core';

/*
  Generated class for the CommunitySummary component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'community-summary',
  templateUrl: 'community-summary.html'
})
export class CommunitySummaryComponent {
  @Input() community: TrellisCommunity;
  showRecent: boolean;

  constructor() {
    this.showRecent = false;
  }

  toggleRecent() {
    this.showRecent = !this.showRecent;
  }

}
