import React, { useState } from "react";
import "./Admin.css";
import { Search } from "../MainPage/Search/Search";
import { productsList } from "../../data/productsList";
import { AdminProduct } from "./Product/AdminProduct";
import { AddForm } from "./AddForm/AddForm";
import { Auth } from "../Auth/Auth";

interface AdminProps {
  token: string;
  setToken: (token: string) => void;
}

export function Admin({ token, setToken }: AdminProps) {
  let [products, setProducts] = useState(productsList);
  let [addOpened, setAddOpened] = useState(false);

  function onSearchInput(value: string): void {
    const croppedValue = value.trim().toLowerCase();
    setProducts(
      productsList.filter(
        item =>
          item.name.toLowerCase().includes(croppedValue) || item.item_id.includes(croppedValue),
      ),
    );
  }

  if (!token) {
    return <Auth setToken={setToken} />;
  }

  return (
    <div className="admin">
      <div className={`admin__header ${addOpened ? "admin__header_blocked" : ""}`}>
        <button className="admin__header-add" onClick={() => setAddOpened(true)}>
          Add product
        </button>
        <Search inputEmitter={onSearchInput} />
      </div>

      {addOpened && (
        <div className="admin__add">
          <AddForm setAddOpened={setAddOpened} />
        </div>
      )}

      <ul className={`admin__list ${addOpened ? "admin__list_blocked" : ""}`}>
        {products.map((item, i) => (
          <li className="admin__product" key={i}>
            <AdminProduct
              item_id={item.item_id}
              price={item.price}
              is_available={item.is_available}
              name={item.name}
              picture={item.picture}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
