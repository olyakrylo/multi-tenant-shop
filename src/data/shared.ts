export interface Product {
  price: number;
  is_available: boolean;
  item_name: string;
  picture: string;
}

export interface ProductWithId extends Product {
  id: number;
};

export type CartType = {
  [id: string]: number;
};
