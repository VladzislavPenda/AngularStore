import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { CarListFilter } from 'src/app/catalog/cars/domain';

@Injectable()
export class BusketService {
  private filter: CarListFilter;
  constructor(private backendService: BackendService) {
    this.filter = {
      pageSize: 30,
      pageNumber: 1,
      // ids:
    };
  }

  public loadLots() {
    this.backendService.shop.getPagedModels$;
  }

  public getLotsFromBusket() {}
}
