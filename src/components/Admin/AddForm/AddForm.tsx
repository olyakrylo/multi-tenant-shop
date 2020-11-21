import React, { useRef, useState } from "react";
import "./AddForm.css";
import { useTranslation } from "react-i18next";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";
import { ImageInput } from "../../ImageInput/ImageInput";
import { add } from "../../../middleware";
import { ProductWithId } from "../../../data/shared";

interface AddFormProps {
  setAddOpened: (val: boolean) => void;
  products: ProductWithId[];
  setProducts: (product: ProductWithId[]) => void;
  setError: (message: string) => void;
}

export function AddForm({ setAddOpened, products, setProducts, setError }: AddFormProps) {
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState("");
  const nameInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const priceInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const { t } = useTranslation();

  async function addProduct(): Promise<void> {
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

    const newProduct = await add({ item_name, price, is_available, picture });

    if (!newProduct) return;
    setProducts([...products, newProduct]);
    setAddOpened(false);
  }

  return (
    <div className="add__form">
      <div className="form-field form__name">
        <span className="form-field__title">{t("product.name")}</span>
        <input ref={nameInput} className="form-field__input" />
      </div>

      <div className="form-field form__price">
        <span className="form-field__title">{t("product.price")}</span>
        <input ref={priceInput} className="form-field__input" />
      </div>

      <StatusCheckbox available={available} setAvailable={setAvailable} />

      <div className="form__buttons">
        <button className="form__btn form__btn_solid" onClick={addProduct}>
          {t("add")}
        </button>
        <button className="form__btn form__btn_transparent" onClick={() => setAddOpened(false)}>
          {t("cancel")}
        </button>
      </div>

      <div className="form__image">
        <ImageInput setImage={setImage} />
      </div>
    </div>
  );
}
