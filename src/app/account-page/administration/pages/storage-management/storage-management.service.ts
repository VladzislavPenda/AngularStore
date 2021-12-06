import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { mapDtoToStorage } from '../../domain';

@Injectable()
export class StorageManagementService {
  constructor(private backendService: BackendService) {}

  public getStorages() {
    return this.backendService.storages
      .getStorages$()
      .pipe(map((e) => mapDtoToStorage(e)));
  }
}
