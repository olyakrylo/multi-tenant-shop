import React, { useRef, useState } from "react";
import "./AdminProduct.css";
import "./Edit.css";
import { useTranslation } from "react-i18next";
import { ProductWithId } from "../../../data/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";
import { ImageInput } from "../../ImageInput/ImageInput";
import { update, deleteItem } from "../../../middleware";

interface AdminProductProps extends ProductWithId {
  products: ProductWithId[];
  setProducts: (prod: ProductWithId[]) => void;
  idx: number;
  setError: (message: string) => void;
}

export function AdminProduct({
  id,
  item_name,
  price,
  picture,
  is_available,
  products,
  setProducts,
  idx,
  setError
}: AdminProductProps) {
  const [editMode, setEditMode] = useState(false);
  const [available, setAvailable] = useState(is_available);
  const [image, setImage] = useState(picture);
  const nameInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const priceInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const { t } = useTranslation();

  async function updateProduct(): Promise<void> {
    const item_name = nameInput!.current!.value;
    const price = parseInt(priceInput!.current!.value);
    const is_available = available;
    const picture = image;

    if (!item_name || !picture) {
      setError(t("error.fields"));
      return;
    }
    if (!price) {
      setError(t("error.price"));
      return;
    }

    const updatedProduct = await update({ id, item_name, price, is_available, picture });

    if (!updatedProduct) return;
    setProducts(products.map((item, i) => (i === idx ? updatedProduct : item)));
    setEditMode(false);
  }

  async function deleteProduct(): Promise<void> {
    const result = await deleteItem(id);

    if (result) {
      setProducts(products.filter(item => item.id !== id));
    }
  }

  function getNameElement() {
    return editMode ? (
      <input
        className="product__input product__name_edit"
        placeholder={t("product.name")}
        defaultValue={item_name}
        ref={nameInput}
      />
    ) : (
      <div className="product__name">{item_name}</div>
    );
  }

  function getPriceElement() {
    return editMode ? (
      <input
        ref={priceInput}
        className="product__input product__price_edit"
        defaultValue={price}
        placeholder={t("product.price")}
      />
    ) : (
      <div className="product__price">
        {price} ₽&nbsp;&nbsp;&nbsp;
        {is_available &&
          <span className="product__status_available">{t("product.available")}</span>}
        {!is_available &&
          <span className="product__status_not-available">{t("product.not_available")}</span>}
      </div>
    );
  }

  function getImageElement() {
    return editMode ? (
      <ImageInput initialSrc={picture} setImage={setImage} />
    ) : (
      <img className="product__image-item" alt="" src={picture} />
    );
  }

  return (
    <div className={`product ${editMode && "product_edit"}`}>
      <div className={`product__image ${editMode && "product__image_edit"}`}>
        {getImageElement()}
      </div>

      <div className={`product__id ${editMode && "product__id_edit"}`}>{id}</div>

      {getNameElement()}

      {getPriceElement()}

      {editMode && (
        <div className="product__av">
          <StatusCheckbox available={available} setAvailable={setAvailable} />
        </div>
      )}

      {editMode && (
        <button className="product__save" onClick={updateProduct}>
          {t("product.save")}
        </button>
      )}

      <div className="product__control">
        <button className="product__control-btn" onClick={() => setEditMode(!editMode)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="product__control-btn product__control-btn_red" onClick={deleteProduct}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
    </div>
  );
}
