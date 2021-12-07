/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarManagementService } from './car-management.service';

describe('Service: CarManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarManagementService]
    });
  });

  it('should ...', inject([CarManagementService], (service: CarManagementService) => {
    expect(service).toBeTruthy();
  }));
});
