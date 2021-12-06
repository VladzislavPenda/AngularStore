import { CharacteristicEntity, LotDto } from 'src/app/backend/dto/lotDto';

export interface Lot {
  id: string;
  model: string;
  price: number;
  year: number;
  horsePower: number;
  photos?: string[];
  numberOfCar?: number;
  storageId?: string;
  characteristics?: CharacteristicEntity[];
}

export function mapDtoToLot(dto: LotDto): Lot {
  return { ...dto };
}
