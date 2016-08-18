/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FirebaseServiceService } from './firebase-service.service';

describe('Service: FirebaseService', () => {
  beforeEach(() => {
    addProviders([FirebaseServiceService]);
  });

  it('should ...',
    inject([FirebaseServiceService],
      (service: FirebaseServiceService) => {
        expect(service).toBeTruthy();
      }));
});
