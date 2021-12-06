import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';

@Injectable({
  providedIn: 'root',
})
export class AdministrationService {
  constructor(private backendService: BackendService) {}

  public getStoreStatistic() {
    return this.backendService.statistic
      .getStorageStatistic$()
      .pipe(map((e) => e.stats));
  }
}
