export interface FilterCriteria {
  category?: string;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
}

export enum SortOptions {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  RATING_ASC = 'rating_asc',
  RATING_DESC = 'rating_desc',
}
