export type Product = {
  item_id: string;
  price: string;
  is_available: boolean;
  name: string;
  picture: string;
};

export const products: Product[] = [
  {
    item_id: "0001",
    price: "100$",
    is_available: true,
    name: "Букет #1",
    picture: "bouquet_1.png",
  },
  {
    item_id: "0002",
    price: "100$",
    is_available: true,
    name: "Букет #2",
    picture: "bouquet_2.png",
  },
  {
    item_id: "0003",
    price: "100$",
    is_available: false,
    name: "Букет #3",
    picture: "bouquet_3.png",
  },
  {
    item_id: "0004",
    price: "100$",
    is_available: true,
    name: "Букет #4",
    picture: "bouquet_1.png",
  },
  {
    item_id: "0005",
    price: "100$",
    is_available: false,
    name: "Букет #5",
    picture: "bouquet_2.png",
  },
  {
    item_id: "0006",
    price: "100$",
    is_available: true,
    name: "Букет #6",
    picture: "bouquet_3.png",
  },
];
