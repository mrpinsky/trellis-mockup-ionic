import { Component } from '@angular/core';

/*
  Generated class for the TrellisDrawer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'trellis-drawer',
  templateUrl: 'trellis-drawer.html'
})
export class TrellisDrawerComponent {

  text: string;

  constructor() {
    console.log('Hello TrellisDrawer Component');
    this.text = 'Hello World';
  }

}
