import React, { useRef, useState } from "react";
import "./AddForm.css";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";
import { ImageInput } from "../../ImageInput/ImageInput";

interface AddFormProps {
  setAddOpened: (val: boolean) => void;
}

export function AddForm({ setAddOpened }: AddFormProps) {
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState("");
  const nameInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const priceInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

  function add(): void {
    const body = {
      item_name: nameInput!.current!.value,
      price: parseInt(priceInput!.current!.value),
      is_available: available,
      picture: image.slice(0, 20),
    };

    console.log(body);
  }

  return (
    <div className="add__form">
      <div className="form-field form__name">
        <span className="form-field__title">name</span>
        <input ref={nameInput} className="form-field__input" />
      </div>

      <div className="form-field form__price">
        <span className="form-field__title">price</span>
        <input ref={priceInput} className="form-field__input" />
      </div>

      <StatusCheckbox available={available} setAvailable={setAvailable} />

      <div className="form__buttons">
        <button className="form__btn form__btn_solid" onClick={add}>
          Add
        </button>
        <button className="form__btn form__btn_transparent" onClick={() => setAddOpened(false)}>
          Cancel
        </button>
      </div>

      <div className="form__image">
        <ImageInput setImage={setImage} />
      </div>
    </div>
  );
}
