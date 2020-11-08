import React, { useState } from "react";
import "./AdminProduct.css";
import "./Edit.css";
import { Product } from "../../../data/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";

interface Mode {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Control({ editMode, setEditMode }: Mode) {
  return (
    <div className="product__control">
      <button className="product__control-btn" onClick={() => setEditMode(!editMode)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className="product__control-btn product__control-btn_red">
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  );
}

export function AdminProduct({ item_id, name, price, picture, is_available }: Product) {
  const [editMode, setEditMode] = useState(false);
  const [available, setAvailable] = useState(is_available);

  function updateImage(event: any): void {
    const image = window.URL.createObjectURL(event.nativeEvent.target.files[0]);
    const imageElement = document.querySelector(".edit__image-item") as HTMLImageElement;
    imageElement!.src = image;
  }

  function getNameElement() {
    return editMode ? (
      <input className="product__input product__name_edit" placeholder="Name" defaultValue={name} />
    ) : (
      <div className="product__name">{name}</div>
    );
  }

  function getPriceElement() {
    return editMode ? (
      <input className="product__input product__price_edit" defaultValue={price} />
    ) : (
      <div className="product__price">
        {price}&nbsp;&nbsp;&nbsp;
        {is_available && <span className="product__status_available">Available</span>}
        {!is_available && <span className="product__status_not-available">Not available</span>}
      </div>
    );
  }

  // function getStatusEditElement() {
  //   return (
  //     <div className="product__status_edit">
  //       <div
  //         className={`product__option ${available && "product__option_selected_green"}`}
  //         onClick={() => setAvailable(true)}
  //       >
  //         Available
  //       </div>
  //       <div
  //         className={`product__option ${!available && "product__option_selected_red"}`}
  //         onClick={() => setAvailable(false)}
  //       >
  //         Not available
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={`product ${editMode && "product_edit"}`}>
      <div className={`product__image ${editMode && "product__image_edit"}`}>
        <img className="product__image-item__image-item" alt="" src={`./img/${picture}`} />
        {editMode && <input type="file" className="product__image-input" onInput={updateImage} />}
      </div>

      <div className={`product__id ${editMode && "product__id_edit"}`}>{item_id}</div>

      {getNameElement()}

      {getPriceElement()}

      {editMode && (
        <div className="product__av">
          <StatusCheckbox available={available} setAvailable={setAvailable} />
        </div>
      )}

      {editMode && <button className="product__save">Save</button>}

      <Control editMode={editMode} setEditMode={setEditMode} />
    </div>
  );
}
