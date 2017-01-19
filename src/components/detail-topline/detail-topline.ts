import { Component, Input } from '@angular/core';

import { TrellisDocument } from '../../models/index';

/*
  Generated class for the DetailTopline component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'detail-topline',
  templateUrl: 'detail-topline.html'
})
export class DetailToplineComponent {
  @Input()
  item: TrellisDocument;
}
