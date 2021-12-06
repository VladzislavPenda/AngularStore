export interface LotDto {
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

export interface CharacteristicEntity {
  name: string;
  value: string;
}
