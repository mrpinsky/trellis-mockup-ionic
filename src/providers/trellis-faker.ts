import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import faker from 'faker';

import { Profile, Community, TrellisDocument } from '../models/index';

/*
  Generated class for the TrellisFaker provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TrellisFaker {
  randArray() {
    return Array.from({length: faker.random.number({min: 1, max: 3})});
  }

  fakeTags(): string[] {
    return this.randArray().map(a => faker.company.bsAdjective());
  }

  fakeProfile(id: number): TrellisProfile {
    return new Profile(
      id,
      faker.name.findName(),
      faker.image.avatar()
    )
  }

  fakeCommunity(id: number, existingProfiles: TrellisProfile[]): TrellisCommunity {
    return new Community(
      id,
      faker.commerce.department(),
      faker.random.arrayElement(existingProfiles),
      {
        long_text: faker.company.bsBuzz(),
        tags: this.fakeTags(),
      }
    );
  }

  fakeDocument(id, profiles: TrellisProfile[], communities: TrellisCommunity[], documents: TrellisDoc[]): TrellisDoc {
    return new TrellisDocument(
      id,
      faker.random.number(profiles.length - 1),
      {
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        inReplyTo: faker.random.arrayElement([undefined, undefined, undefined, undefined, undefined, undefined].concat(documents)),
        communities: this.randArray().map(a => {
          return faker.random.arrayElement(communities);
        }),
        tags: this.fakeTags(),
      }
    )
  }

}
