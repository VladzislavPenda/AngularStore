import { Injectable } from '@angular/core';
import { makeApiUrl } from '../app-common/app-common';
import { HttpClient } from '@angular/common/http';
import {
  CarListFilter,
  LotShort,
  mapCarFilterToParams,
} from '../catalog/cars/domain';
import { RegisterUserDto } from './dto/registerUserDto';
import { UserDto } from './dto/userDto';
import { StorageStatistic } from './dto/statisticDto';
import { LotDto } from './dto/lotDto';
import { OrderDto } from './dto/orderDto';
import { StorageDto } from './dto/storageDto';
import { Lot } from '../catalog/lot/domain';

@Injectable()
export class BackendService {
  constructor(private readonly http: HttpClient) {}

  public shop = {
    getModelById$: (id: string) => {
      const url = makeApiUrl(`shopModels/${id}`);
      return this.http.get<LotDto>(url);
    },

    getPagedModels$: (filter: CarListFilter) => {
      // const queryParams = toQueryParams(filterDto);
      const url = makeApiUrl(`shopModels`);
      const params = mapCarFilterToParams(filter);
      return this.http.get<Lot[]>(url, {
        params,
        observe: 'response',
        withCredentials: true,
      });
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

  public auth = {
    login$: (login: string, password: string) => {
      const url = makeApiUrl(`authentication/login`);
      return this.http.post(url, { username: login, password });
    },

    register$: (registerInfo: RegisterUserDto) => {
      const url = makeApiUrl('authentication');
      return this.http.post(url, registerInfo);
    },

    getUserInfo$: (userId: string) => {
      const url = makeApiUrl(`authentication/${userId}`);
      return this.http.get<UserDto>(url);
    },
  };

  public statistic = {
    getStorageStatistic$: () => {
      const url = makeApiUrl(`statistic/storage`);
      return this.http.get<StorageStatistic>(url);
    },
  };

  public storages = {
    getStorages$: () => {
      const url = makeApiUrl(`storage`);
      return this.http.get<StorageDto[]>(url);
    },
  };

  public orders = {
    getAllOrders$: () => {
      const url = makeApiUrl('order');
      const params = {
        pageNumber: 1,
        pageSize: 100,
      };
      return this.http.get<OrderDto[]>(url, { params });
    },
  };
}

function toQueryParams(obj: { [key: string]: any }) {
  if (obj == undefined) return '';

  let queryParamsString = '?';
  Object.entries(obj).forEach((element) => {
    queryParamsString += `${element[0]}=${element[1]}&`;
  });

  return queryParamsString;
}
