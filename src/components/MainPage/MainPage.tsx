import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./MainPage.css";
import { Search } from "./Search/Search";
import { ProductCard } from "./ProductCard/ProductCard";
import { productsList } from "../../data/productsList";
import { ProductType, CartType } from "../../data/shared";
import { loadProducts } from "../../middleware";

interface MainPageProps {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export function MainPage({ cart, setCart, cartCount, setCartCount }: MainPageProps) {
  let [products, setProducts] = useState([] as ProductType[]);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    loadProducts().then(data => {
      setLoaded(true);
      setProducts(data);
    });
  });

  function onSearchInput(value: string): void {
    const croppedValue = value.trim().toLowerCase();
    setProducts(productsList.filter(item => item.item_name.toLowerCase().includes(croppedValue)));
  }

  function addToCart(id: string): void {
    cart[id] = cart[id] ? cart[id] + 1 : 1;
    document.cookie = `cart=${JSON.stringify(cart)}`;
    setCart(cart);
    setCartCount(++cartCount);
  }

  const productsItems = products
    .sort((a, b) => a.price - b.price)
    .map(({ item_name, price, picture, is_available, id }: ProductType, i) => {
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

      <div className="content__count">Total count: {products.length}</div>

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
