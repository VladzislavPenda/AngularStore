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
}
