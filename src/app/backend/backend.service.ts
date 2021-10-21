import { Injectable } from '@angular/core';
import { makeApiUrl } from '../app-common/app-common';
import { HttpClient } from '@angular/common/http';
import { Lot } from '../catalog/cars/domain';

@Injectable()
export class BackendService {
  constructor(private readonly http: HttpClient) {}

  public shop = {
    getModelById$: (id: string) => {
      const url = makeApiUrl(`shopModels/${id}`);
      return this.http.get(url);
    },

    getPagedModels$: () => {
      const url = makeApiUrl(`shopModels`);
      return this.http.get<Lot[]>(url);
    },

    get2$: (id: string) => {
      const url = makeApiUrl(`shopModels/${id}`);
      return this.http.get(
        'https://localhost:5001/api/ShopModels/b5565f87-88ab-4cd8-aa34-0595edaa8614'
      );
    },
  };

  public file = {
    downloadProductImage$: (id: string) => {
      const url = makeApiUrl(`file/model/image/${id}`);
      return this.http.get(url, { responseType: 'blob', observe: 'response' });
    },
  };
}
