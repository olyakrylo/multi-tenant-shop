import React, { useState } from "react";
import "./AdminProduct.css";
import { Product } from "../../../data/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-regular-svg-icons";

export function AdminProduct({ item_id, name, price, picture, is_available }: Product) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`product ${editMode && "product_edit"}`}>
      <img className="product__image" src={`./img/${picture}`} alt={""} />

      <div className="product__id">
        {item_id}&nbsp;&nbsp;(<span className="product__name">{name}</span>)
      </div>

      <div className="product__price">
        {price}&nbsp;&nbsp;&nbsp;
        {is_available && <span className="product__status_available">В наличии</span>}
        {!is_available && <span className="product__status_not-available">Нет в наличии</span>}
      </div>

      <div className="product__control">
        <button className="product__control-btn" onClick={() => setEditMode(!editMode)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="product__control-btn product__control-btn_red">
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
    </div>
  );
}
