/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersManagementService } from './orders-management.service';

describe('Service: OrdersManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersManagementService]
    });
  });

  it('should ...', inject([OrdersManagementService], (service: OrdersManagementService) => {
    expect(service).toBeTruthy();
  }));
});
