import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Injectable()
export class CarManagementService {
  constructor(private backendService: BackendService) {}

  public getCarList() {}
}
