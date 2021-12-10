export interface EntDto {
  carcase: EntEntity[];
  drive: EntEntity[];
  engine: EntEntity[];
  transmission: EntEntity[];
  mark: EntEntity[];
}

export interface EntEntity {
  id: string;
  value: string;
  type: number;
}
