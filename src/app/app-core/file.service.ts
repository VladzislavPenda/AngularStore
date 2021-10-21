import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private backendService: BackendService) {}

  public getImage$(imageId: string) {
    return this.backendService.file
      .downloadProductImage$(imageId)
      .pipe(map((response) => ({ file: response.body })));
  }
}
