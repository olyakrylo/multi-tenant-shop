export type ProductType = {
  item_id: string;
  price: number;
  is_available: boolean;
  name: string;
  picture: string;
};

export type CartType = {
  [id: string]: number;
};
