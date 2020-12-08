import React, { ChangeEvent, useState } from "react";
import Masonry from "react-masonry-css";
import { useTranslation } from "react-i18next";
import "./MainPage.css";
import { Search } from "../Search/Search";
import { ProductCard } from "./ProductCard/ProductCard";
import { ProductWithId, CartType } from "../../data/shared";

interface MainPageProps {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  products: ProductWithId[];
  setProducts: (list: ProductWithId[]) => void;
}

export function MainPage({
  cart,
  setCart,
  cartCount,
  setCartCount,
  products,
}: MainPageProps) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price");

  const comparators: { [key: string]: (a: ProductWithId, b: ProductWithId) => number } = {
    price: (a: ProductWithId, b: ProductWithId) => a.price - b.price,
    recency: (a: ProductWithId, b: ProductWithId) => b.id - a.id,
    name: (a: ProductWithId, b: ProductWithId) => {
      if (a.item_name > b.item_name) return 1;
      if (a.item_name < b.item_name) return -1;
      return 0;
    }
  }

  function changeSort(e: ChangeEvent) {
    //@ts-ignore
    const field = e.nativeEvent.target.value;
    setSort(field);
  }

  function onSearchInput(value: string): void {
    const croppedValue = value.trim().toLowerCase();
    setSearch(croppedValue);
  }

  function addToCart(id: number): void {
    const stringId = id.toString();
    cart[stringId] = cart[stringId] ? cart[stringId] + 1 : 1;
    document.cookie = `cart=${JSON.stringify(cart)}`;
    setCart(cart);
    setCartCount(++cartCount);
  }

  const productsItems = products
    .filter((item) => item.item_name.toLowerCase().includes(search))
    .sort(comparators[sort])
    .map(({ item_name, price, picture, is_available, id }: ProductWithId, i) => {
      return (
        <ProductCard
          key={i}
          id={id}
          item_name={item_name}
          price={price}
          picture={picture}
          is_available={is_available}
          addToCart={addToCart}
        />
      );
    });

  const breakpointColumnsObj = {
    default: 4,
    1500: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="main">
      <Search inputEmitter={onSearchInput} />

      <div className="content__sort">
        <span>{t("sort.by")} &nbsp;</span>
        <select onChange={changeSort} className="content__sort-select">
          <option value="price">{t("sort.price")}</option>
          <option value="recency">{t("sort.recency")}</option>
          <option value="name">{t("sort.name")}</option>
        </select>
      </div>

      <Masonry
        columnClassName="results__col"
        className="results"
        breakpointCols={breakpointColumnsObj}
      >
        {productsItems}
      </Masonry>
    </div>
  );
}
