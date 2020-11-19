export type ProductType = {
  id: number;
  price: number;
  is_available: boolean;
  item_name: string;
  picture: string;
};

export type CartType = {
  [id: string]: number;
};
