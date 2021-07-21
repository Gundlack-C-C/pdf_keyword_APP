/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SklearnService } from './sklearn.service';

describe('Service: Sklearn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SklearnService]
    });
  });

  it('should ...', inject([SklearnService], (service: SklearnService) => {
    expect(service).toBeTruthy();
  }));
});
