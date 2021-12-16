import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { mapDtoToLot } from './domain';

@Injectable()
export class CarLotService {
  constructor(private backendService: BackendService) {}

  public loadLot(lotId: string) {
    return this.backendService.shop
      .getModelById$(lotId)
      .pipe(map((e) => mapDtoToLot(e)));
  }

  public addLotToCart(lotId: string) {
    const ids = this.getLotsInCart();
    ids.push(lotId);
    localStorage.setItem('CART_LOT_IDS', JSON.stringify(ids));
  }

  public removeLotFromCart(lotId: string) {
    let ids = this.getLotsInCart();
    ids = ids.filter((e) => e !== lotId);
    localStorage.setItem('CART_LOT_IDS', JSON.stringify(ids));
  }

  public isLotInCart(lotId) {
    const ids = this.getLotsInCart();
    return ids.some((e) => e === lotId);
  }

  public getLotsInCart() {
    const data = localStorage.getItem('CART_LOT_IDS');
    return data ? JSON.parse(data) : [];
  }
}
