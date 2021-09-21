import { TestBed } from '@angular/core/testing';

import { QaAdminApisService } from './qa-admin-apis.service';

describe('QaAdminApisService', () => {
  let service: QaAdminApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaAdminApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
