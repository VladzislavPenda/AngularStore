import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Injectable()
export class LotService {
  public constructor(private backendService: BackendService) {}

  //todo implement
  public createLot() {}

  public loadImage(image: File) {
    return this.backendService.file.uploadImage$(image);
  }
}
