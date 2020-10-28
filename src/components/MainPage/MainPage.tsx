import React from "react";
import "./MainPage.css";
import { Search } from "./Search/Search";
import { ProductCard } from "./ProductCard/ProductCard";
import { products } from "../../data/products";
import { Product } from "../../data/products";

export function MainPage() {
  function onSearchInput(value: string): void {
    console.log(value);
  }

  return (
    <div className="main">
      <Search inputEmitter={onSearchInput} />

      <div className="content__count">Total count: {products.length}</div>

      <div className="results">
        <ul className="results__list">
          {products.map(({ name, price, picture, is_available }: Product) => {
            return (
              <li className="results__item">
                <ProductCard name={name} price={price} img={picture} isAvailable={is_available} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
