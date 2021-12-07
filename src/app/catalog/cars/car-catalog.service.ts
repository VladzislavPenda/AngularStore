import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { mapDtoToLot } from '../lot/domain';
import { CarListFilter } from './domain';

@Injectable()
export class CarCatalogService {
  public totalPages: number;
  public currentPage: number;
  public filter: CarListFilter;

  public constructor(private readonly backendService: BackendService) {
    this.filter = {
      pageSize: 9,
      pageNumber: 1,
    };
  }

  public getCatalogList() {
    return this.backendService.shop.getPagedModels$(this.filter).pipe(
      map((response) => {
        let header = response.headers.get('X-pagination');
        let totalPages = JSON.parse(header).TotalPages;
        return { list: response.body, pages: totalPages };
      })
    );
  }
}
