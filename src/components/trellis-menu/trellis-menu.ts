import { Component, Input, ElementRef, SimpleChanges } from '@angular/core';

/*
  Generated class for the TrellisMenu component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'trellis-menu',
  templateUrl: 'trellis-menu.html'
})
export class TrellisMenuComponent {
  @Input() closeOnSelect: boolean;
  @Input() closeOnOutsideClick: boolean;
  @Input() open: boolean;
  openUp: boolean;
  nativeElement: any;

  constructor(private elementRef: ElementRef) {
    console.log('Hello TrellisMenu Component');
    if (this.closeOnSelect === undefined) {
      this.closeOnSelect = true;
    }
    if (this.closeOnOutsideClick === undefined) {
      this.closeOnOutsideClick = true;
    }
    if (this.open === undefined) {
      this.open = false;
    }
    this.nativeElement = elementRef.nativeElement;
  }

  show() {
    this.open = true;
  };

  toggle() {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  };

  close() {
    this.open = false;
  };

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'open' && changes[propName].currentValue === true) {
        if (this.nativeElement.getBoundingClientRect().top / window.innerHeight > 0.5) {
          this.openUp = true;
        } else {
          this.openUp = false;
        }
      }
    }
  }

}
