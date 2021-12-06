/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarCatalogService } from './car-catalog.service';

describe('Service: CarCatalog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarCatalogService]
    });
  });

  it('should ...', inject([CarCatalogService], (service: CarCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
