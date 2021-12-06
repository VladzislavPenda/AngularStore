/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageManagementService } from './storage-management.service';

describe('Service: StorageManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageManagementService]
    });
  });

  it('should ...', inject([StorageManagementService], (service: StorageManagementService) => {
    expect(service).toBeTruthy();
  }));
});
