import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductWithId } from "../../../data/shared";

interface ProductCardProps extends ProductWithId {
  addToCart: (id: number) => void;
}

export function ProductCard({
  item_name,
  price,
  id,
  picture,
  is_available,
  addToCart,
}: ProductCardProps) {
  return (
    <div className="card">
      <div className="card__content">
        <img src={picture} className="card__image" alt="" />
        <div className="card__name">{item_name}</div>
        <div className="card__price">{price} ₽</div>

        {!is_available && <div className="card__availability"> Нет в наличии </div>}
      </div>

      {is_available && (
        <div className="card__add">
          <FontAwesomeIcon onClick={() => addToCart(id)} className="card__cart" icon={faCartPlus} />
        </div>
      )}
    </div>
  );
}
