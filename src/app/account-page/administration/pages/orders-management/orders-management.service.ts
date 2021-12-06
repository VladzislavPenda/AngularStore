import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { mapDtoToOrderList } from '../../domain';

@Injectable()
export class OrdersManagementService {
  constructor(private backendService: BackendService) {}

  public getOrders() {
    return this.backendService.orders
      .getAllOrders$()
      .pipe(map((e) => mapDtoToOrderList(e)));
  }
}
