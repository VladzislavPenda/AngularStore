export interface StorageStatistic {
  stats: Stats;
}

export interface CharacteristicEnt {
  value: string;
  count: number;
}

export interface Stats {
  carcase: CharacteristicEnt[];
  engine: CharacteristicEnt[];
  drive: CharacteristicEnt[];
  transmmission: CharacteristicEnt[];
  mark: CharacteristicEnt[];
}
