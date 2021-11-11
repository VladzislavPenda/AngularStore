import { Injectable } from '@angular/core';
import { makeApiUrl } from '../app-common/app-common';
import { HttpClient } from '@angular/common/http';
import { Lot } from '../catalog/cars/domain';
import { FilterDto } from './dto/filterDto';
import { LoginDto } from './dto/loginDto';
import { RegisterUserDto } from './dto/registerUserDto';
import { UserDto } from './dto/userDto';
import { StorageStatistic } from './dto/statisticDto';

@Injectable()
export class BackendService {
  constructor(private readonly http: HttpClient) {}

  public shop = {
    getModelById$: (id: string) => {
      const url = makeApiUrl(`shopModels/${id}`);
      return this.http.get(url);
    },

    getPagedModels$: (filterDto?: FilterDto) => {
      const queryParams = toQueryParams(filterDto);
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
    storageStatistic$: () => {
      const url = makeApiUrl(`statistic/storage`);
      return this.http.get<StorageStatistic>(url);
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
