import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { ProductType } from "../../../data/shared";
import "./CartProduct.css";

interface CartProductProps extends ProductType {
  amount: number;
  changeCart: (id: string, add: boolean) => void;
}

export function CartProduct({
  name,
  price,
  item_id,
  picture,
  amount,
  changeCart,
}: CartProductProps) {
  return (
    <div className="cart-product">
      <img className="cart-product__img" alt="" src={`./img/${picture}`} />
      <div className="cart-product__name">{name}</div>
      <div className="cart-product__price">{price} ₽</div>
      <div className="cart-product__control">
        <button
          className="cart-product__btn cart-product__btn_red"
          onClick={() => changeCart(item_id, false)}
        >
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <div className="cart-product__amount">{amount}</div>
        <button
          className="cart-product__btn cart-product__btn_green"
          onClick={() => changeCart(item_id, true)}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
    </div>
  );
}
