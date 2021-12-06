import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { formatDate } from 'src/app/app-common/domain';
import { OrderDto } from 'src/app/backend/dto/orderDto';
import { StorageDto } from 'src/app/backend/dto/storageDto';
import { Lot } from 'src/app/catalog/lot/domain';

export interface OrderList {
  id: string;
  userEmail: string;
  orderDateTime: string;
  shopModel: Lot;
}

export interface Storage {
  id: string;
  address: string;
  openTime: string;
  closeTime: string;
  numberOfCars: number;
}

export function mapDtoToOrderList(dto: OrderDto[]): OrderList[] {
  const orderList: OrderList[] = [];

  dto.forEach((element) => {
    let order = {
      id: element.id,
      userEmail: element.userEmail,
      orderDateTime: formatDate(element.orderDateTime, 'full'),
      shopModel: element.shopModel,
    };

    orderList.push(order);
  });

  return orderList;
}

export function mapDtoToStorage(dto: StorageDto[]): Storage[] {
  const storageList: Storage[] = [];

  dto.forEach((item) => {
    let storage = {
      id: item.id,
      address: item.address,
      openTime: item.openTime,
      closeTime: item.closeTime,
      numberOfCars: item.numberOfCars,
    };

    storageList.push(storage);
  });

  return storageList;
}
