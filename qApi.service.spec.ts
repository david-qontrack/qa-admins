/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QApiService } from './qApi.service';

describe('Service: QApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QApiService]
    });
  });

  it('should ...', inject([QApiService], (service: QApiService) => {
    expect(service).toBeTruthy();
  }));
});
