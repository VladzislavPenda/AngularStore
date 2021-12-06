/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreStatisticService } from './store-statistic.service';

describe('Service: StoreStatistic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreStatisticService]
    });
  });

  it('should ...', inject([StoreStatisticService], (service: StoreStatisticService) => {
    expect(service).toBeTruthy();
  }));
});
