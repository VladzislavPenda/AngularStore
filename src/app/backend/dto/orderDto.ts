import { LotDto } from './lotDto';

export interface OrderDto {
  id: string;
  userEmail: string;
  orderDateTime: string;
  shopModel: LotDto;
}
