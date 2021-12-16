/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusketService } from './busket.service';

describe('Service: Busket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusketService]
    });
  });

  it('should ...', inject([BusketService], (service: BusketService) => {
    expect(service).toBeTruthy();
  }));
});
