import React from "react";
import "./Cart.css";
import { CartType, ProductType } from "../../data/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartProduct } from "./Product/CartProduct";

interface CartProps {
  cart: CartType;
  products: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Cart({ cart, products, setCart, cartCount, setCartCount }: CartProps) {
  function changeCart(id: string, add: boolean): void {
    if (add) {
      cart[id] += 1;
    } else if (cart[id] === 1) {
      delete cart[id];
    } else {
      cart[id] -= 1;
    }
    document.cookie = `cart=${JSON.stringify(cart)}`;
    setCart(cart);
    setCartCount(add ? ++cartCount : --cartCount);
  }

  const cartProducts = products.filter(item => Object.keys(cart).includes(item.item_id));

  return (
    <div className="cart">
      <p className="cart__title">
        <FontAwesomeIcon icon={faShoppingCart} />
        &nbsp;&nbsp;Shopping Cart
      </p>

      <ul className="cart__list">
        {cartProducts.map((item, i) => (
          <li className="cart__item" key={i}>
            <CartProduct
              item_id={item.item_id}
              name={item.name}
              picture={item.picture}
              amount={cart[item.item_id]}
              price={item.price}
              is_available={item.is_available}
              changeCart={changeCart}
            />
          </li>
        ))}
      </ul>

      <p className="cart__sum">
        <span className="cart__sum_light">Summary: </span>
        {cartProducts.reduce((prev, curr) => {
          const currProduct = products.find(item => item.item_id === curr.item_id);
          if (!currProduct) return prev;
          return prev + currProduct.price * cart[curr.item_id];
        }, 0)}{" "}
        ₽
      </p>
    </div>
  );
}
