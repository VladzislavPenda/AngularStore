import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Injectable()
export class StoreStatisticService {
  constructor(private backendService: BackendService) {}

  public getStats() {
    return this.backendService.statistic.getStorageStatistic$();
  }
}
