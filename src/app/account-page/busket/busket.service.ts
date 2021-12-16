import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { CarListFilter } from 'src/app/catalog/cars/domain';
import { Lot } from 'src/app/catalog/lot/domain';

@Injectable()
export class BusketService {
  private filter: CarListFilter;
  constructor(private backendService: BackendService) {
    this.filter = {
      pageSize: 30,
      pageNumber: 1,
      ids: this.getLotsFromBusket(),
    };
  }

  public loadLots() {
    if (!this.filter.ids || this.filter.ids.length === 0) {
      console.log('empty');
      return of([]) as Observable<Lot[]>;
    }
    return this.backendService.shop
      .getPagedModels$(this.filter)
      .pipe(map((e) => e.body));
  }

  public deleteLotFromCart(id: string) {
    this.filter.ids = this.filter.ids.filter((e) => e !== id);
    localStorage.setItem('CART_LOT_IDS', JSON.stringify(this.filter.ids));
  }

  public getLotsFromBusket() {
    const data = localStorage.getItem('CART_LOT_IDS');
    return data ? JSON.parse(data) : [];
  }

  public setCart(ids: string[]) {
    this.filter.ids = [];
    localStorage.setItem('CART_LOT_IDS', JSON.stringify(ids));
  }
}
