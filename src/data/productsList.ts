export type Product = {
  item_id: string;
  price: number;
  is_available: boolean;
  name: string;
  picture: string;
};

export const productsList: Product[] = [
  {
    item_id: "0001",
    price: 1000,
    is_available: true,
    name: "Букет #1",
    picture: "b1.jpg",
  },
  {
    item_id: "0002",
    price: 1239,
    is_available: true,
    name: "Букет #2",
    picture: "b2.jpg",
  },
  {
    item_id: "0003",
    price: 1180,
    is_available: false,
    name: "Мега букет",
    picture: "b3.jpg",
  },
  {
    item_id: "0004",
    price: 820,
    is_available: true,
    name: "Супер букет",
    picture: "b4.jpg",
  },
  {
    item_id: "0005",
    price: 530,
    is_available: true,
    name: "Букет #1",
    picture: "b1.jpg",
  },
  {
    item_id: "0006",
    price: 999,
    is_available: true,
    name: "Букет #2",
    picture: "b2.jpg",
  },
  {
    item_id: "0007",
    price: 1310,
    is_available: false,
    name: "Мега букет",
    picture: "b3.jpg",
  },
  {
    item_id: "0008",
    price: 1999,
    is_available: true,
    name: "Супер букет",
    picture: "b4.jpg",
  },
  {
    item_id: "0009",
    price: 1050,
    is_available: true,
    name: "Букет #1",
    picture: "b1.jpg",
  },
  {
    item_id: "0010",
    price: 2199,
    is_available: true,
    name: "Букет #2",
    picture: "b2.jpg",
  },
  {
    item_id: "0011",
    price: 1850,
    is_available: false,
    name: "Мега букет",
    picture: "b3.jpg",
  },
  {
    item_id: "0012",
    price: 1530,
    is_available: true,
    name: "Супер букет",
    picture: "b4.jpg",
  },
];
