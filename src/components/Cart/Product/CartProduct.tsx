import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { ProductWithId } from "../../../data/shared";
import "./CartProduct.css";

interface CartProductProps extends ProductWithId {
  amount: number;
  changeCart: (id: number, add: boolean) => void;
}

export function CartProduct({
  item_name,
  price,
  id,
  picture,
  amount,
  changeCart,
}: CartProductProps) {
  return (
    <div className="cart-product">
      <img className="cart-product__img" alt="" src={picture} />
      <div className="cart-product__name">{item_name}</div>
      <div className="cart-product__price">{price} ₽</div>
      <div className="cart-product__control">
        <button
          className="cart-product__btn cart-product__btn_red"
          onClick={() => changeCart(id, false)}
        >
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <div className="cart-product__amount">{amount}</div>
        <button
          className="cart-product__btn cart-product__btn_green"
          onClick={() => changeCart(id, true)}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
    </div>
  );
}
