import React, { useState } from "react";
import "./Admin.css";
import { useTranslation } from "react-i18next";
import { Search } from "../Search/Search";
import { AdminProduct } from "./Product/AdminProduct";
import { AddForm } from "./AddForm/AddForm";
import { Auth } from "./Auth/Auth";
import { ProductWithId } from "../../data/shared";

interface AdminProps {
  token: string;
  setToken: (token: string) => void;
  products: ProductWithId[];
  setProducts: (list: ProductWithId[]) => void;
  setError: (message: string) => void;
  updateCart: () => void;
}

export function Admin({ token, setToken, products, setProducts, setError, updateCart }: AdminProps) {
  let [addOpened, setAddOpened] = useState(false);
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  function onSearchInput(value: string): void {
    const croppedValue = value.trim().toLowerCase();
    setSearch(croppedValue);
  }

  if (!token) {
    return <Auth setToken={setToken} setError={setError} />;
  }

  return (
    <div className="admin">
      <div className={`admin__header ${addOpened ? "admin__header_blocked" : ""}`}>
        <button className="admin__header-add" onClick={() => setAddOpened(true)}>
          {t("add_product")}
        </button>
        <Search inputEmitter={onSearchInput} />
      </div>

      <div className={`admin__add ${addOpened && "admin__add_open"}`}>
        <AddForm
          setAddOpened={setAddOpened}
          products={products}
          setProducts={setProducts}
          setError={setError}
          updateCart={updateCart}
        />
      </div>

      <ul className={`admin__list ${addOpened ? "admin__list_blocked" : ""}`}>
        {products
          .filter(
            item =>
              item.item_name.toLowerCase().includes(search) || item.id.toString().includes(search),
          )
          .map((item, i) => (
            <li className="admin__product" key={i}>
              <AdminProduct
                id={item.id}
                price={item.price}
                is_available={item.is_available}
                item_name={item.item_name}
                picture={item.picture}
                products={products}
                setProducts={setProducts}
                idx={i}
                setError={setError}
                updateCart={updateCart}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
