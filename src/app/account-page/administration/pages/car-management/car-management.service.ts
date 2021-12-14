import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { CarListFilter } from 'src/app/catalog/cars/domain';

@Injectable()
export class CarManagementService {
  public filter: CarListFilter;
  constructor(private backendService: BackendService) {
    this.filter = {
      pageSize: 20,
      pageNumber: 1,
    };
  }

  public loadCarList() {
    return this.backendService.shop.getPagedModels$(this.filter).pipe(
      map((response) => {
        let header = response.headers.get('X-pagination');
        let totalPages = JSON.parse(header).TotalPages;
        return { list: response.body, pages: totalPages };
      })
    );
  }

  public deleteLot(lotId: string) {
    return this.backendService.shop.delete$(lotId);
  }
}
