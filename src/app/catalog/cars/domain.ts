export interface LotShort {
  id: string;
  model: string;
  price: number;
  photos: string[];
}

export interface CarListFilter {
  pageSize?: number;
  pageNumber?: number;
  ids?: string[];
}

export function mapCarFilterToParams(filter: CarListFilter) {
  const params: any = {
    filter: [],
  };

  if (filter.pageNumber) {
    params.pageNumber = filter.pageNumber;
  }

  if (filter.pageSize) {
    params.pageSize = filter.pageSize;
  }

  return params;
}
