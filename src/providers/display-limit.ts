import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DisplayLimit provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DisplayLimit {
  displayLimit(obj, opts) {
    if (obj.limit === undefined) {
      obj.limit = {};
    }
    obj.limit[opts.name] = opts.initial || opts.increment;
    if (obj.more === undefined) {
      obj.more = {};
    }
    obj.more[opts.name] = () => {
      obj.limit[opts.name] = obj.limit[opts.name] + opts.increment;
    };
  };
}
