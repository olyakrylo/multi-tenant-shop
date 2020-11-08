import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./MainPage.css";
import { Search } from "./Search/Search";
import { ProductCard } from "./ProductCard/ProductCard";
import { productsList } from "../../data/productsList";
import { Product } from "../../data/productsList";

export function MainPage() {
  let [products, setProducts] = useState(productsList);

  function onSearchInput(value: string): void {
    const croppedValue = value.trim().toLowerCase();
    setProducts(productsList.filter(item => item.name.toLowerCase().includes(croppedValue)));
  }

  const productsItems = products
    .sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10))
    .map(({ name, price, picture, is_available }: Product, i) => {
      return (
        <ProductCard key={i} name={name} price={price} img={picture} isAvailable={is_available} />
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
