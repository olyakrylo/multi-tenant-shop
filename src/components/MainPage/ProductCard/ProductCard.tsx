import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: string;
  img: string;
  isAvailable: boolean;
}

export function ProductCard({ name, price, img, isAvailable }: ProductCardProps) {
  return (
    <div className="card">
      <img src={`./img/${img}`} className="card__image" alt="" />
      <div className="card__name">{name}</div>
      <div className="card__price">{price}</div>

      {!isAvailable && <div className="card__availability"> Нет в наличии </div>}
    </div>
  );
}
