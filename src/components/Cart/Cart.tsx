import React from "react";
import { useTranslation } from "react-i18next";
import "./Cart.css";
import { CartType, ProductWithId } from "../../data/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartProduct } from "./Product/CartProduct";
import { config } from "../../config";

interface CartProps {
  cartList: CartType;
  products: ProductWithId[];
  setCartList: React.Dispatch<React.SetStateAction<CartType>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Cart({ cartList, products, setCartList, cartCount, setCartCount }: CartProps) {
  function changeCart(id: number, add: boolean): void {
    if (add) {
      cartList[id] += 1;
    } else if (cartList[id] === 1) {
      delete cartList[id];
    } else {
      cartList[id] -= 1;
    }
    document.cookie = `cart=${JSON.stringify(cartList)}; max-age=${config.login_time * 60 * 60}`;
    setCartList(cartList);
    setCartCount(add ? ++cartCount : --cartCount);
  }

  const cartProducts = products.filter(item => Object.keys(cartList).includes(item.id.toString()));

  const { t } = useTranslation();

  return (
    <div className="cart">
      <p className="cart__title">
        <FontAwesomeIcon icon={faShoppingCart} />
        &nbsp;&nbsp;{t("cart")}
      </p>

      <ul className="cart__list">
        {cartProducts.map((item, i) => (
          <li className="cart__item" key={i}>
            <CartProduct
              id={item.id}
              item_name={item.item_name}
              picture={item.picture}
              amount={cartList[item.id]}
              price={item.price}
              is_available={item.is_available}
              changeCart={changeCart}
            />
          </li>
        ))}
      </ul>

      <p className="cart__sum">
        <span className="cart__sum_light">{t("sum")}: </span>
        {cartProducts.reduce((prev, curr) => {
          const currProduct = products.find(item => item.id === curr.id);
          if (!currProduct) return prev;
          return prev + currProduct.price * cartList[curr.id];
        }, 0)}{" "}
        ₽
      </p>
    </div>
  );
}
