/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransformersService } from './transformers.service';

describe('Service: Transformers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformersService]
    });
  });

  it('should ...', inject([TransformersService], (service: TransformersService) => {
    expect(service).toBeTruthy();
  }));
});
