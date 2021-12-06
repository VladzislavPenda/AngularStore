/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarLotService } from './car-lot.service';

describe('Service: CarLot', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarLotService]
    });
  });

  it('should ...', inject([CarLotService], (service: CarLotService) => {
    expect(service).toBeTruthy();
  }));
});
