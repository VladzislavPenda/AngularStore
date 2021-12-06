import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FileService } from '../app-core/file.service';
import { BackendService } from '../backend/backend.service';

@Injectable()
export class CarListResolver implements Resolve<any> {
  constructor(
    private backendService: BackendService,
    private fileService: FileService
  ) {}
  public resolve() {
    // return this.backendService.shop
    //   .getPagedModels$()
    //   .subscribe((e) => console.log(e));
    // return this.backendService.shop.get2$('');
  }
}
